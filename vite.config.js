import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// @kernel alias resolves conditionally:
//   - Locally (default): points to ../../../kernel (the shared kernel folder)
//   - During Vercel deploy: deploy_theme.sh pre-bundles kernel into ./_kernel,
//     and this alias prefers the local copy (Vercel only sees what's uploaded)
const localKernel = path.resolve(__dirname, '_kernel');
const sharedKernel = path.resolve(__dirname, '../../../kernel');
const kernelPath = fs.existsSync(localKernel) ? localKernel : sharedKernel;

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@kernel': kernelPath,
    },
  },
  server: { port: 5173 },
  preview: { port: 4173 },
});
