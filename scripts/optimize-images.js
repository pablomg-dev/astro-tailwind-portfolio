import sharp from 'sharp';
import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const assetsDir = join(process.cwd(), 'src', 'assets');

async function optimizeImage(file: string): Promise<void> {
  const inputPath = join(assetsDir, file);
  const inputBuffer = await readFile(inputPath);
  const inputSize = inputBuffer.length / 1024; // KB

  try {
    if (file.endsWith('.png')) {
      const optimizedBuffer = await sharp(inputBuffer)
        .png({
          quality: 85,
          compressionLevel: 9,
          adaptiveFiltering: true,
        })
        .toBuffer();
      await writeFile(inputPath, optimizedBuffer);
      const outputSize = optimizedBuffer.length / 1024;
      const savings = ((inputSize - outputSize) / inputSize * 100).toFixed(1);
      console.log(`${file}: ${inputSize.toFixed(0)}KB → ${outputSize.toFixed(0)}KB (${savings}% reduction)`);
    } else if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      const optimizedBuffer = await sharp(inputBuffer)
        .jpeg({ quality: 85, mozjpeg: true })
        .toBuffer();
      await writeFile(inputPath, optimizedBuffer);
      const outputSize = optimizedBuffer.length / 1024;
      const savings = ((inputSize - outputSize) / inputSize * 100).toFixed(1);
      console.log(`${file}: ${inputSize.toFixed(0)}KB → ${outputSize.toFixed(0)}KB (${savings}% reduction)`);
    } else if (file.endsWith('.webp')) {
      const optimizedBuffer = await sharp(inputBuffer)
        .webp({ quality: 85, effort: 6 })
        .toBuffer();
      await writeFile(inputPath, optimizedBuffer);
      const outputSize = optimizedBuffer.length / 1024;
      const savings = ((inputSize - outputSize) / inputSize * 100).toFixed(1);
      console.log(`${file}: ${inputSize.toFixed(0)}KB → ${outputSize.toFixed(0)}KB (${savings}% reduction)`);
    }
  } catch (error) {
    console.error(`Error optimizing ${file}:`, error.message);
  }
}

async function optimizeImages() {
  const files = await readdir(assetsDir);
  const imageFiles = files.filter(f =>
    f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.webp')
  );

  console.log(`Found ${imageFiles.length} images to optimize (${imageFiles.length} PNG, ${imageFiles.filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg')).length} JPG, ${imageFiles.filter(f => f.endsWith('.webp')).length} WebP)...`);

  for (const file of imageFiles) {
    await optimizeImage(file);
  }

  console.log('Image optimization complete!');
}

optimizeImages().catch(console.error);
