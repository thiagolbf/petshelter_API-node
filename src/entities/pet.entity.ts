import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";

import { Shelter } from "./shelter.entity";
import { User } from "./user.entity.ts";

@Entity("pets")
export class Pet {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "enum", enum: ["cachorro", "gato"], name: "animal_type" })
  animalType: "cachorro" | "gato";

  @Column({ type: "enum", enum: ["macho", "femea"], name: "gender" })
  gender: "male" | "female";

  @Column({ default: false })
  adopted: boolean;

  @Column({ default: false })
  castrated: boolean;

  @Column({ length: 1024 })
  bio: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string | null;

  @OneToOne(() => User, (user) => user.pet)
  @JoinColumn()
  user: User;

  @OneToOne(() => Shelter, (shelter) => shelter.pet)
  @JoinColumn()
  shelter: Shelter;
}
