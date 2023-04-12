import {
  AfterLoad,
  BeforeInsert,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { RealEstate } from './real_estate.entity'
import { User } from './user.entity'

@Entity('schedules_users_properties')
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'date' })
  date: string

  @Column({ type: 'time', name: 'hour' })
  hour: string

  @ManyToOne(() => RealEstate)
  realEstate: RealEstate

  @ManyToOne(() => User, (user) => user.schedules)
  user: User

  // @BeforeInsert()
  // setFormattedDate() {
  //   const formattedDate = this.date.split('/')
  //   const day = formattedDate[formattedDate.length / formattedDate.length]
  //   const month = formattedDate[formattedDate.length - 1]
  //   const year = formattedDate[formattedDate.length - formattedDate.length]
  //   const dateStringFormatted = `${year}/${month}/${day}`

  //   this.date = dateStringFormatted
  // }
}
