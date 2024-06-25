import { PrimaryGeneratedColumn, Column, OneToOne, Entity } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45 })
  name: string;

  @Column({ length: 11 })
  cpf: string;
}
