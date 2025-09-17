import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/Club-Events-Website/',
  plugins: [react()],
});
