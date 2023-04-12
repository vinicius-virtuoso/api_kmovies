import { z } from 'zod'
import { DeepPartial, Repository } from 'typeorm'
import { Schedule } from '../entities/schedule.entity'
import { scheduleCreateSchema } from '../schemas'

type iScheduleCreate = z.infer<typeof scheduleCreateSchema>
type iScheduleUpdate = DeepPartial<Schedule>
type iScheduleRepo = Repository<Schedule>

export { iScheduleCreate, iScheduleUpdate, iScheduleRepo }
