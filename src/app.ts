import express, { Application, Request, Response, NextFunction } from 'express';
import todoRoutes from "./routes/todos";

const app: Application = express();

app.use(express.json());
app.use('/todos', todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.json({ message: err.message });
 });

app.listen(3000);