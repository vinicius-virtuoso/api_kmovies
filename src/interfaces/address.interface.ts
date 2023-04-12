import { Address } from './../entities/address.entity'
import { DeepPartial, Repository } from 'typeorm'
import { z } from 'zod'
import { addressCreateScheme } from '../schemas'

type iAddressCreate = z.infer<typeof addressCreateScheme>
type iAddressUpdate = DeepPartial<Address>
type iAddressRepo = Repository<Address>

export { iAddressCreate, iAddressUpdate, iAddressRepo }
