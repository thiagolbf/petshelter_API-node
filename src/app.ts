import express, { Application, json } from "express";

import adressRouter from "./routes/adress.router";
import shelterRouter from "./routes/shelter.router";
import userRouter from "./routes/user.router";

const app: Application = express();
app.use(json());

app.use("/api/adress", adressRouter);
app.use("/api/shelter", shelterRouter);
app.use("/api/user", userRouter);

export default app;
