import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { getRounds, hashSync } from "bcryptjs";
import Contact from "./Contacts.entity";

@Entity('clients')
export default class Client {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ length: 150 })
  name: string

  @Column({ length: 150, unique: true })
  email: string

  @Column({ length: 30 })
  password: string

  @CreateDateColumn({ type: 'date' })
  createdAt: string

  @Column({default: false})
  admin: boolean

  @OneToMany(() => Contact, (contact) => contact.client)
  contact: Contact[]


  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const hasRounds: number = getRounds(this.password)

    if(!hasRounds) {
      this.password = hashSync(this.password, 10)
    }
  }

}