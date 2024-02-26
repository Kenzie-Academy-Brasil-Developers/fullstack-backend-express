import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import Client from "./Clients.entity";

@Entity('contacts')
export default class Contact {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 150 })
  name: string

  @Column({ length: 150, unique: true })
  email: string

  @Column({})
  cellphone: string

  @CreateDateColumn({ type: 'date' })
  createdAt: string
  
  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @DeleteDateColumn({ type: "date", nullable: true })
  deletedAt: string | null;

  @ManyToOne(() => Client, (client) => client.contact)
  client: Client
}