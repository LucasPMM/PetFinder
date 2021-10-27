import { Router } from 'express'
import petsRoutes from './pets'

const router = Router()

router.use('/pets', petsRoutes)

export default router
