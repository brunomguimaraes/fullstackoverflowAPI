import express from 'express';
import cors from 'cors';
import * as questionsController from './controllers/questionsController';
const app = express();
app.use(cors());
app.use(express.json());

app.post('/question', questionsController.create);

export default app;