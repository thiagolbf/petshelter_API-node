import "express-async-errors";
import { errorHandler } from "./errors";

import express, { Application, json } from "express";

import petRouter from "./routes/pet.router";
import shelterRouter from "./routes/shelter.router";
import userRouter from "./routes/user.router";
import loginRouter from "./routes/session.router";

const app: Application = express();
app.use(json());

app.use("/api/pet", petRouter);
app.use("/api/shelter", shelterRouter);
app.use("/api/user", userRouter);
app.use("/api/session", loginRouter);

app.use(errorHandler);

export default app;
