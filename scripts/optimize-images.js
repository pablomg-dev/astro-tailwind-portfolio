import sharp from 'sharp';
import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const assetsDir = join(process.cwd(), 'src', 'assets');

async function optimizeImages() {
  const files = await readdir(assetsDir);
  const pngFiles = files.filter(f => f.endsWith('.png'));

  console.log(`Found ${pngFiles.length} PNG images to optimize...`);

  for (const file of pngFiles) {
    const inputPath = join(assetsDir, file);
    const outputPath = join(assetsDir, file);

    try {
      const inputBuffer = await readFile(inputPath);
      const inputSize = inputBuffer.length / 1024; // KB

      // Optimizar PNG con sharp
      const optimizedBuffer = await sharp(inputBuffer)
        .png({
          quality: 85,
          compressionLevel: 9,
          adaptiveFiltering: true,
        })
        .toBuffer();

      const outputSize = optimizedBuffer.length / 1024; // KB
      const savings = ((inputSize - outputSize) / inputSize * 100).toFixed(1);

      console.log(`${file}: ${inputSize.toFixed(0)}KB → ${outputSize.toFixed(0)}KB (${savings}% reduction)`);

      await writeFile(outputPath, optimizedBuffer);
    } catch (error) {
      console.error(`Error optimizing ${file}:`, error.message);
    }
  }

  console.log('Image optimization complete!');
}

optimizeImages().catch(console.error);
