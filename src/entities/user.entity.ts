import { getRounds, hash, hashSync } from 'bcryptjs'
import { Schedule } from './schedule.entity'
import {
  AfterInsert,
  AfterLoad,
  AfterUpdate,
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 45 })
  name: string

  @Column({ length: 45, unique: true })
  email: string

  @Column({ default: false })
  admin: boolean

  @Column({ length: 120 })
  password: string

  @CreateDateColumn({ type: 'date' })
  createdAt: string

  @UpdateDateColumn({ type: 'date' })
  updatedAt: string

  @DeleteDateColumn({ type: 'date', nullable: true })
  deletedAt: string

  @OneToMany(() => Schedule, (schedules) => schedules.user)
  schedules: Schedule[]

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const passwordHash = getRounds(this.password)
    if (!passwordHash) {
      this.password = hashSync(this.password, 10)
    }
  }
}
