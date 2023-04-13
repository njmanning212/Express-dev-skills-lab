import { Router } from 'express'
import * as digimonCtrl from '../controllers/digimon.js'

const router = Router()

// GET localhost:3000/users
router.get('/', digimonCtrl.index)
router.get('/new', digimonCtrl.new)
router.get('/:digimonId', digimonCtrl.show)
router.get('/:digimonId/edit', digimonCtrl.edit)
router.post('/', digimonCtrl.create)
router.delete('/:digimonId', digimonCtrl.delete)
router.put('/:digimonId', digimonCtrl.update)

export { router }
