import express, { Application } from "express";

const PORT: number = 3000;
const app: Application = express();

const runningMsg: string = `Server running on http://localhost:${PORT}`;
app.listen(PORT, () => console.log("rodando....."));
