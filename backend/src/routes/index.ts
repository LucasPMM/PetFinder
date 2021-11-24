import { Router } from 'express'
import petsRoutes from './pets'
import commentsRoutes from './comments'

const router = Router()

router.use('/pets', petsRoutes)
router.use('/comments', commentsRoutes)

export default router
