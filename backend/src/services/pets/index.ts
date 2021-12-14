import Comments, { CommentsOuput } from '../../models/comments'
import Pets, { PetsInput, PetsOuput } from '../../models/pets'
import { ReqType, ResType } from '../types'

const createDocument = async (payload: PetsInput): Promise<PetsOuput> => {
  return Pets.create(payload)
}

const getAll = async (): Promise<PetsOuput[]> => {
  return Pets.findAll()
}

const getOne = async (id: number): Promise<PetsOuput> => {
  return Pets.findByPk<any>(id)
}

const getComments = async (id: string): Promise<CommentsOuput[]> => {
  const comments = await Comments.findAll({
    where: {
      petId: parseInt(id)
    }
  })
  return comments
}

const createPet = async (req: ReqType, res: ResType) => {
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

const getAllPets = async (req: ReqType, res: ResType) => {
  try {
    const payload = await getAll()
    res.send(payload)
  } catch (err) {
    res.status(400).send({
      message: `Something wrong happens! ${JSON.stringify(err)}`
    })
  }
}

const getSpecificPet = async (req: ReqType, res: ResType) => {
  const id = (req?.params as any)?.id
  try {
    const pet = (await getOne(id)) || {}
    const comments = (await getComments(id)) || []
    const obj = { ...pet, comments }
    res.send(obj)
  } catch (err) {
    res.status(400).send({
      message: `Something wrong happens! ${JSON.stringify(err)}`
    })
  }
}

const updatePet = async (req: ReqType, res: ResType) => {
  const id = (req?.params as any)?.id
  const payload = req?.body
  if (!payload) {
    res.status(400).send({
      message: 'Invalid fields!'
    })
  } else {
    try {
      const data = await Pets.update(payload, { where: { id } })
      res.send(data)
    } catch (err) {
      res.status(400).send({
        message: `Something wrong happens! ${JSON.stringify(err)}`
      })
    }
  }
}

const deletePet = async (req: ReqType, res: ResType) => {
  const id = (req?.params as any)?.id
  try {
    await Pets.destroy({ where: { id } })
    res.send({})
  } catch (err) {
    res.status(400).send({
      message: `Something wrong happens! ${JSON.stringify(err)}`
    })
  }
}

export default { createPet, getAllPets, getSpecificPet, updatePet, deletePet }
