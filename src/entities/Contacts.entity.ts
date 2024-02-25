import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { getRounds, hashSync } from "bcryptjs";
import Client from "./Clients.entity";

@Entity('contacts')
export default class Contact {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ length: 150 })
  name: string

  @Column({ length: 150, unique: true })
  email: string

  @Column({ length: 30 })
  cellphone: string

  @CreateDateColumn({ type: 'date' })
  createdAt: string

  @ManyToOne(() => Client, (client) => client.contact)
  client: Client
}