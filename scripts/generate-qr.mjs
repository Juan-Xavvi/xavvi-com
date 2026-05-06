import QRCode from 'qrcode';
import { mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, '../public/qr');

mkdirSync(outDir, { recursive: true });

const codes = [
  { name: 'android', url: 'https://play.google.com/store/apps/details?id=com.xavvi.app', size: 400 },
  { name: 'ios', url: 'https://apps.apple.com/app/xavvi/id6758371264', size: 400 },
];

for (const { name, url, size } of codes) {
  const out = resolve(outDir, `${name}.png`);
  await QRCode.toFile(out, url, {
    width: size,
    margin: 1,
    color: { dark: '#000000', light: '#ffffff' },
    errorCorrectionLevel: 'H',
  });
  console.log(`Generated ${out}`);
}
