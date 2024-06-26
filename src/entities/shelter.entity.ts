import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Pet } from "./pet.entity";

@Entity("shelters")
export class Shelter {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45 })
  name: string;

  @Column({ length: 45, unique: true })
  email: string;

  @Column({ length: 12 })
  whatsApp: string;

  @Column({ length: 120 })
  password: string;

  @OneToOne(() => Pet, (pet) => pet.shelter)
  pet: Pet;
}
