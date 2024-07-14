import express, { Application, json } from "express";

import petRouter from "./routes/pet.router";
import shelterRouter from "./routes/shelter.router";
import userRouter from "./routes/user.router";

const app: Application = express();
app.use(json());

app.use("/api/pet", petRouter);
app.use("/api/shelter", shelterRouter);
app.use("/api/user", userRouter);

export default app;
