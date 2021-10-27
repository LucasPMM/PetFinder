import { Router } from 'express'
import petsService from './../../services/pets'

const router = Router()

router.get('/', (req, res) => petsService.getAllPets(req, res))
router.post('/', (req, res) => petsService.createPet(req, res))

export default router
