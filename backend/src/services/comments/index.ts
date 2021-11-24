import Comments, { CommentsInput, CommentsOuput } from '../../models/comments'
import { ReqType, ResType } from '../types'

const createDocument = async (
  payload: CommentsInput
): Promise<CommentsOuput> => {
  return Comments.create(payload)
}

const getAll = async (req: ReqType, res: ResType) => {
  try {
    const payload = await Comments.findAll()
    res.send(payload)
  } catch (err) {
    res.status(400).send({
      message: `Something wrong happens! ${JSON.stringify(err)}`
    })
  }
}

const postComment = async (req: ReqType, res: ResType) => {
  try {
    const payload = req?.body
    if (!payload) {
      res.status(400).send({
        message: 'Invalid fields!'
      })
    } else {
      const data = await createDocument(payload)
      res.send(data)
    }
  } catch (err) {
    res.status(400).send({
      message: `Something wrong happens! ${JSON.stringify(err)}`
    })
  }
}

const updateComment = async (req: ReqType, res: ResType) => {
  try {
    const content = req?.body
    const id = (req?.params as any)?.id
    if (!content) {
      res.status(400).send({
        message: 'Invalid fields!'
      })
    } else {
      await Comments.update(content, { where: { id } })
      res.status(200).send(`Success`)
    }
  } catch (err) {
    res.status(400).send({
      message: `Something wrong happens! ${JSON.stringify(err)}`
    })
  }
}

const deleteComment = async (req: ReqType, res: ResType) => {
  try {
    const id = (req.params as any).id
    if (!id) {
      res.status(400).send({
        message: 'Invalid fields!'
      })
    } else {
      await Comments.destroy({ where: { id: Number(id) }, force: true })
      res.status(200).send(`Success`)
    }
  } catch (err) {
    res.status(400).send({
      message: `Something wrong happens! ${JSON.stringify(err)}`
    })
  }
}

export default { getAll, postComment, updateComment, deleteComment }
