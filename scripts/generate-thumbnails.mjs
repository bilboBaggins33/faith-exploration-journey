import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_DIR = path.join(__dirname, '../public/assets/bible');
const THUMB_DIR = path.join(SRC_DIR, 'thumbnail');

const THUMB_WIDTH = 400;
const JPEG_QUALITY = 75;

await mkdir(THUMB_DIR, { recursive: true });

const files = await readdir(SRC_DIR);
const images = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f));

console.log(`Generating thumbnails for ${images.length} images...`);

let ok = 0, skip = 0, fail = 0;

for (const file of images) {
  const src = path.join(SRC_DIR, file);
  const outName = file.replace(/\.png$/i, '.jpg');
  const dest = path.join(THUMB_DIR, outName);

  try {
    await sharp(src)
      .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: JPEG_QUALITY, progressive: true })
      .toFile(dest);
    const srcStat = (await import('fs')).statSync(src);
    const destStat = (await import('fs')).statSync(dest);
    console.log(`  ✓ ${file} → ${outName}  (${Math.round(srcStat.size/1024)}KB → ${Math.round(destStat.size/1024)}KB)`);
    ok++;
  } catch (err) {
    console.error(`  ✗ ${file}: ${err.message}`);
    fail++;
  }
}

console.log(`\nDone: ${ok} generated, ${skip} skipped, ${fail} failed`);
console.log(`Thumbnails saved to: ${THUMB_DIR}`);
