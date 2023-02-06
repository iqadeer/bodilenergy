import express, { Request, Response } from 'express';

import morgan from 'morgan';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // To parse the incoming requests with JSON payloads
app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/', (req: Request, res: Response) => {
  res.status(200).json('hello from express.');
});

export default app;
