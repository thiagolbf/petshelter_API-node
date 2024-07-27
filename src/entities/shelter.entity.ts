import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { Pet } from "./pet.entity";

import { Address } from "./address.entity";

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

  @OneToMany(() => Pet, (pet) => pet.shelter)
  pets: Pet[];

  @OneToOne(() => Address, (address) => address.shelter)
  @JoinColumn()
  address: Address;
}
