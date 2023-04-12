import { Schedule } from './schedule.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Address } from './address.entity'
import { Category } from './category.entity'

@Entity('real_estate')
export class RealEstate {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ default: false })
  sold: boolean

  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
  value: number | string

  @Column()
  size: number

  @CreateDateColumn({ type: 'date' })
  createdAt: string

  @UpdateDateColumn({ type: 'date' })
  updatedAt: string

  @OneToMany(() => Schedule, (schedule) => schedule.realEstate)
  @JoinColumn()
  schedules: Schedule[]

  @OneToOne(() => Address, (address) => address.realEstate)
  @JoinColumn()
  @Index({ unique: true })
  address: Address

  @ManyToOne(() => Category, (category) => category.realEstate)
  category: Category
}
