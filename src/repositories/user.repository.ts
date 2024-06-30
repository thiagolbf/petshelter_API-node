import { AppDataSourcer } from "../data-source";
import { User } from "../entities/user.entity.ts";

export default AppDataSourcer.getRepository(User);
