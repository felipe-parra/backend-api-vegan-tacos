import {Router} from 'express'
import tacosRoutes from './tacos.routes'

const router = Router()

router.use('/tacos',tacosRoutes)

export default router

