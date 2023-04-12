import 'express-async-errors'
import { schedulesRouter } from './routes/schedules.routes'
import { usersRouter } from './routes/users.routes'

import express from 'express'
import { errorHandler } from './errors'
import { loginRouter } from './routes/login.routes'
import { categoriesRouter } from './routes/categories.routes'
import { realEstateRouter } from './routes/realEstates.routes'

const app = express()
app.use(express.json())

app.use('/users', usersRouter)
app.use('/login', loginRouter)
app.use('/categories', categoriesRouter)
app.use('/realEstate', realEstateRouter)
app.use('/schedules', schedulesRouter)

app.use(errorHandler)

export default app
