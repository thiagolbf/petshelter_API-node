import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";

import { Shelter } from "./shelter.entity";

@Entity("adresses")
export class Adress {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45 })
  street: string;

  @Column({ length: 8 })
  zipcode: string;

  @Column({ length: 20 })
  city: string;

  @Column({ length: 2 })
  state: string;

  @OneToOne(() => Shelter, (shelter) => shelter.adress)
  @JoinColumn()
  shelter: Shelter;
}
