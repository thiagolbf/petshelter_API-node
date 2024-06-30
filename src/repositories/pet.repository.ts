import { AppDataSourcer } from "../data-source";
import { Pet } from "../entities/pet.entity";

export default AppDataSourcer.getRepository(Pet);
