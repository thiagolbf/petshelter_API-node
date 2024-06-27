import "dotenv/config";
import express, { Application } from "express";
import { AppDataSourcer } from "./data-source";

const app: Application = express();

AppDataSourcer.initialize().then((): void => {
  console.log("Database connected");

  const PORT: number = Number(process.env.PORT || 3000);
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});
