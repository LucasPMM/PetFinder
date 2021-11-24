import { Router } from 'express'
import commentsService from './../../services/comments'

const router = Router()

router.get('/', (req, res) => commentsService.getAll(req, res))
router.post('/', (req, res) => commentsService.postComment(req, res))
router.put('/:id', (req, res) => {
  commentsService.updateComment(req, res)
})
router.delete('/:id', (req, res) => {
  commentsService.deleteComment(req, res)
})

export default router
