import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

function escape(s: unknown): string {
	return String(s ?? '')
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req: VercelRequest, res: VercelResponse) {
	if (req.method !== 'POST') {
		res.setHeader('Allow', 'POST');
		return res.status(405).json({ error: 'Method not allowed' });
	}

	const body = (req.body ?? {}) as Record<string, unknown>;
	const name = typeof body.name === 'string' ? body.name.trim() : '';
	const email = typeof body.email === 'string' ? body.email.trim() : '';
	const subject = typeof body.subject === 'string' ? body.subject.trim() : '';
	const message = typeof body.message === 'string' ? body.message.trim() : '';
	const from = typeof body.from === 'string' ? body.from.trim() : '';

	if (!name || !email || !message) {
		return res.status(400).json({ error: 'Missing required fields: name, email, message' });
	}
	if (!EMAIL_RE.test(email)) {
		return res.status(400).json({ error: 'Invalid email address' });
	}
	if (name.length > 200 || email.length > 320 || subject.length > 300 || message.length > 5000) {
		return res.status(400).json({ error: 'Field too long' });
	}

	const apiKey = process.env.RESEND_API_KEY;
	if (!apiKey) {
		console.error('RESEND_API_KEY is not set');
		return res.status(500).json({ error: 'Email service not configured' });
	}

	const fromAddress = process.env.VITE_CONTACT_FROM || 'noreply@mail.xavvi.com';
	const toAddress = process.env.CONTACT_TO || 'contact@xavvi.com';

	const resend = new Resend(apiKey);

	try {
		const result = await resend.emails.send({
			from: fromAddress,
			to: [toAddress],
			replyTo: email,
			subject: `Xavvi contact${from ? ` [${from}]` : ''}: ${subject || 'New message'}`,
			html: `
				<div style="font-family: -apple-system, sans-serif; line-height: 1.6; color: #212226;">
					<h2 style="margin: 0 0 16px;">New contact form submission</h2>
					<p><strong>Name:</strong> ${escape(name)}</p>
					<p><strong>Email:</strong> ${escape(email)}</p>
					${subject ? `<p><strong>Subject:</strong> ${escape(subject)}</p>` : ''}
					${from ? `<p><strong>From page:</strong> ${escape(from)}</p>` : ''}
					<hr style="border: none; border-top: 1px solid #ddd; margin: 16px 0;">
					<p><strong>Message:</strong></p>
					<p style="white-space: pre-wrap;">${escape(message)}</p>
				</div>
			`,
			text:
				`New contact form submission\n\n` +
				`Name: ${name}\n` +
				`Email: ${email}\n` +
				(subject ? `Subject: ${subject}\n` : '') +
				(from ? `From page: ${from}\n` : '') +
				`\nMessage:\n${message}\n`,
		});

		if (result.error) {
			console.error('Resend error:', result.error);
			return res.status(502).json({ error: 'Failed to send email' });
		}

		return res.status(200).json({ ok: true, id: result.data?.id });
	} catch (err) {
		console.error('Contact handler error:', err);
		return res.status(500).json({ error: 'Internal server error' });
	}
}
