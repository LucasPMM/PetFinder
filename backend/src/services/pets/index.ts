import Pets, { PetsInput, PetsOuput } from '../../models/pets'
import { ReqType, ResType } from '../types'

const createDocument = async (payload: PetsInput): Promise<PetsOuput> => {
  const data = { ...payload, id: Math.round(Date.now() / 1000) }
  console.log('createDocument', data)
  return Pets.create(data)
}

const getAll = async (): Promise<PetsOuput[]> => {
  return Pets.findAll()
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
    console.log('olha o erro', err)
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

export default { createPet, getAllPets }
