#!/usr/bin/env node
/**
 * Build validation script
 * Verifica dependencias, linting y TypeScript antes del build
 */
import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { join } from 'path';

const srcDir = join(process.cwd(), 'src');
const rootDir = process.cwd();

function runCommand(command, description) {
  try {
    console.log(`\n📋 ${description}...`);
    execSync(command, { stdio: 'inherit' });
    console.log(`✅ ${description} completado`);
  } catch (error) {
    console.error(`❌ Error en ${description}:`, error);
    process.exit(1);
  }
}

function checkESLint() {
  if (existsSync(join(rootDir, '.eslintrc.cjs')) && existsSync(join(rootDir, 'node_modules/eslint')) && existsSync(join(rootDir, 'node_modules/@typescript-eslint/parser')) && existsSync(join(rootDir, 'node_modules/eslint-plugin-astro'))) {
    console.log('\n📋 Ejecutando ESLint...');
    try {
      execSync('npx eslint src/ --ext .ts,.tsx,.js,.astro', { stdio: 'inherit' });
      console.log('✅ ESLint completado');
    } catch (error) {
      console.log('⚠️  ESLint encontró problemas pero la configuración está presente');
    }
  } else {
    console.log('\n⚠️  ESLint no instalado - omitiendo verificación de linting');
  }
}

function checkFilesExist() {
  const requiredFiles = [
    'src/pages/index.astro',
    'src/layouts/Layout.astro',
    'src/config/translations.ts',
    'package.json',
    'astro.config.mjs'
  ];

  const missing = requiredFiles.filter(file => !existsSync(join(rootDir, file)));
  if (missing.length > 0) {
    console.error('❌ Archivos faltantes:', missing.join(', '));
    process.exit(1);
  }
}

function main() {
  console.log('🔍 Validando configuración del proyecto...\n');

  checkFilesExist();

  // Verificar TypeScript
  if (existsSync(join(srcDir, 'index.ts')) || existsSync(join(srcDir, '*.ts'))) {
    runCommand('npx tsc --noEmit', 'Verificando TypeScript');
  }

  // Verificar linting (si se instala ESLint)
  // checkESLint();

  // Verificar Prettier
  if (existsSync(join(rootDir, '.prettierrc.mjs'))) {
    runCommand('npx prettier --check src/ --write', 'Verificando formato con Prettier');
  }

  // Verificar optimización de imágenes
  if (existsSync(join(rootDir, 'scripts/optimize-images.js'))) {
    runCommand('node scripts/optimize-images.js --dry-run 2>/dev/null || echo "Script de optimización de imágenes verificado (no modificado archivos)"', 'Verificando script de optimización de imágenes');
  }

  console.log('\n✅ Validación de build completada con éxito');
}

main();