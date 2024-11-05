import express from 'express';

export const healthRouter = express.Router();

healthRouter.get('/', (req: express.Request, res: express.Response) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
}); 