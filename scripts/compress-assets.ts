/**
 * Compress oversized public assets to WebP + regenerate thumbnails.
 * Run: npx tsx scripts/compress-assets.ts
 */
import { readdirSync, statSync, mkdirSync, existsSync } from 'node:fs';
import { join, extname, basename, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const bibleDir = join(root, 'public/assets/bible');
const thumbDir = join(bibleDir, 'thumbnail');
const assetsDir = join(root, 'public/assets');

mkdirSync(thumbDir, { recursive: true });

const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp']);

async function compressToWebp(
  inputPath: string,
  outputPath: string,
  width?: number,
  quality = 78
) {
  let pipeline = sharp(inputPath).rotate();
  if (width) {
    pipeline = pipeline.resize({ width, withoutEnlargement: true });
  }
  await pipeline.webp({ quality }).toFile(outputPath);
}

async function processBibleImages() {
  const files = readdirSync(bibleDir).filter(f => {
    const ext = extname(f).toLowerCase();
    return IMAGE_EXT.has(ext) && !f.startsWith('.');
  });

  for (const file of files) {
    const input = join(bibleDir, file);
    if (!statSync(input).isFile()) continue;

    const name = basename(file, extname(file));
    const webpOut = join(bibleDir, `${name}.webp`);
    const thumbOut = join(thumbDir, `${name}.webp`);

    const sizeMb = statSync(input).size / (1024 * 1024);
    // Full book art: max 1200px wide
    await compressToWebp(input, webpOut, 1200, sizeMb > 2 ? 72 : 78);
    // Thumbnail: max 400px
    await compressToWebp(input, thumbOut, 400, 70);

    const before = (statSync(input).size / 1024).toFixed(0);
    const after = (statSync(webpOut).size / 1024).toFixed(0);
    console.log(`bible/${file}: ${before}KB → ${name}.webp ${after}KB`);
  }
}

async function processHeroAndCovers() {
  const files = readdirSync(assetsDir).filter(f => {
    const ext = extname(f).toLowerCase();
    return IMAGE_EXT.has(ext) && statSync(join(assetsDir, f)).isFile();
  });

  for (const file of files) {
    const input = join(assetsDir, file);
    const name = basename(file, extname(file));
    const webpOut = join(assetsDir, `${name}.webp`);
    const isHero = name.startsWith('hero');
    await compressToWebp(input, webpOut, isHero ? 1920 : 800, isHero ? 75 : 78);
    const before = (statSync(input).size / 1024).toFixed(0);
    const after = (statSync(webpOut).size / 1024).toFixed(0);
    console.log(`assets/${file}: ${before}KB → ${name}.webp ${after}KB`);
  }
}

await processBibleImages();
await processHeroAndCovers();
console.log('Done compressing assets.');
