import { RealEstate } from './real_estate.entity'
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('address')
export class Address {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 45 })
  street: string

  @Column({ length: 8 })
  zipCode: string

  @Column({ type: 'varchar', nullable: true, length: 7 })
  number: string | null

  @Column({ length: 20 })
  city: string

  @Column({ length: 2 })
  state: string

  @OneToOne(() => RealEstate, (realState) => realState.address)
  @JoinColumn()
  realEstate: RealEstate
}
