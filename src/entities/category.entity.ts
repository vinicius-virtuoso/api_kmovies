import { RealEstate } from './real_estate.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 45, unique: true })
  name: string

  @OneToMany(() => RealEstate, (realEstate) => realEstate.category)
  realEstate: RealEstate[]
}
