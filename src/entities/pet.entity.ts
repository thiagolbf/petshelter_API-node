import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from "typeorm";

import { Shelter } from "./shelter.entity";
import { User } from "./user.entity.ts";

@Entity("pets")
export class Pet {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 90 })
  name: string;

  @Column({ type: "enum", enum: ["cachorro", "gato"], name: "type" })
  type: "cachorro" | "gato";

  @Column({ type: "enum", enum: ["macho", "femea"], name: "gender" })
  gender: "macho" | "femea";

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

  @ManyToOne(() => User, (user) => user.pets, { onDelete: "CASCADE" })
  @JoinColumn()
  user: User;

  @ManyToOne(() => Shelter, (shelter) => shelter.pets, { onDelete: "CASCADE" })
  @JoinColumn()
  shelter: Shelter;
}
