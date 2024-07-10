import "dotenv/config";
import app from "./app";
import { AppDataSourcer } from "./data-source";

AppDataSourcer.initialize().then((): void => {
  console.log("Database connected");

  const PORT: number = Number(process.env.PORT || 3000);
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});
