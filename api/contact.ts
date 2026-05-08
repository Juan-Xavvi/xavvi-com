import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// Server-side only. These addresses are NEVER sent to the frontend.
const ROUTES: Record<string, string> = {
	creators: 'creators@xavvi.com',
	brands: 'brands@xavvi.com',
	agencies: 'mcn@xavvi.com',
	media: 'juan@xavvi.com',
	investors: 'kevin@xavvi.com',
	general: 'support@xavvi.com',
};

const CATEGORY_LABELS: Record<string, string> = {
	creators: 'Creators',
	brands: 'Brands & Vendors',
	agencies: 'Agencies / MCNs',
	media: 'Media',
	investors: 'Investors',
	general: 'General',
};

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
	const str = (v: unknown) => (typeof v === 'string' ? v.trim() : '');

	const category = str(body.category).toLowerCase();
	const name = str(body.name);
	const email = str(body.email);
	const phone = str(body.phone);
	const company = str(body.company);
	const website = str(body.website);
	const subject = str(body.subject);
	const message = str(body.message);

	// Validation
	if (!ROUTES[category]) {
		return res.status(400).json({ error: 'Invalid or missing category' });
	}
	if (!name || !email || !subject || !message) {
		return res.status(400).json({ error: 'Missing required fields: name, email, subject, message' });
	}
	if (!EMAIL_RE.test(email)) {
		return res.status(400).json({ error: 'Invalid email address' });
	}
	if (
		name.length > 200 ||
		email.length > 320 ||
		phone.length > 40 ||
		company.length > 200 ||
		website.length > 500 ||
		subject.length > 300 ||
		message.length > 5000
	) {
		return res.status(400).json({ error: 'Field too long' });
	}

	const apiKey = process.env.RESEND_API_KEY;
	if (!apiKey) {
		console.error('RESEND_API_KEY is not set');
		return res.status(500).json({ error: 'Email service not configured' });
	}

	const fromAddress = process.env.VITE_CONTACT_FROM || 'noreply@mail.xavvi.com';
	const toAddress = ROUTES[category];
	const categoryLabel = CATEGORY_LABELS[category];

	const resend = new Resend(apiKey);

	try {
		const result = await resend.emails.send({
			from: fromAddress,
			to: [toAddress],
			replyTo: email,
			subject: `[Xavvi Contact] ${categoryLabel} — ${subject}`,
			html: `
				<div style="font-family: -apple-system, sans-serif; line-height: 1.6; color: #212226;">
					<h2 style="margin: 0 0 16px;">New ${escape(categoryLabel)} contact form submission</h2>
					<p><strong>Category:</strong> ${escape(categoryLabel)}</p>
					<p><strong>Name:</strong> ${escape(name)}</p>
					<p><strong>Email:</strong> ${escape(email)}</p>
					<p><strong>Phone:</strong> ${phone ? escape(phone) : 'Not provided'}</p>
					<p><strong>Company:</strong> ${company ? escape(company) : 'Not provided'}</p>
					<p><strong>Website:</strong> ${website ? escape(website) : 'Not provided'}</p>
					<hr style="border: none; border-top: 1px solid #ddd; margin: 16px 0;">
					<p><strong>Subject:</strong> ${escape(subject)}</p>
					<p><strong>Message:</strong></p>
					<p style="white-space: pre-wrap;">${escape(message)}</p>
				</div>
			`,
			text:
				`New ${categoryLabel} contact form submission\n\n` +
				`Category: ${categoryLabel}\n` +
				`Name: ${name}\n` +
				`Email: ${email}\n` +
				`Phone: ${phone || 'Not provided'}\n` +
				`Company: ${company || 'Not provided'}\n` +
				`Website: ${website || 'Not provided'}\n\n` +
				`Subject: ${subject}\n\n` +
				`Message:\n${message}\n`,
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
