import {
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  Entity,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
} from "typeorm";
import { Pet } from "./pet.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45 })
  name: string;

  @Column({ length: 45, unique: true })
  email: string;

  @Column({ length: 11 })
  cpf: string;

  @Column({ length: 120 })
  password: string;

  @OneToMany(() => Pet, (pet) => pet.user)
  pets: Pet[];
}
