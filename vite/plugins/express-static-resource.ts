import express from 'express';
import type { Plugin } from 'vite';

export default function createPlugin(filePath: string): Plugin {
  const app = express();
  app.use('/assets', express.static(filePath));

  return {
    name: 'custom-express-middleware',
    configureServer(server) {
      server.middlewares.use(app);
    }
  };
}
