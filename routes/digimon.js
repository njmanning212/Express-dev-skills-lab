import { Router } from 'express'
import * as digimonCtrl from '../controllers/digimon.js'

const router = Router()

// GET localhost:3000/users
router.get('/', digimonCtrl.index)
router.get('/new', digimonCtrl.new)
router.post('/', digimonCtrl.create)

export { router }
