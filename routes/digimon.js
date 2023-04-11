import { Router } from 'express'
import { listRookieDigimon } from '../controllers/digimon.js'

const router = Router()

// GET localhost:3000/users
router.get('/', listRookieDigimon)

export { router }
