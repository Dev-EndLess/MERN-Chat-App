import { Router } from 'express'
import { getMessages, sendMessage } from '../controllers/message.controller.js'
import protectedRoute from '../middleware/protectedRoutes.js'

const router = Router()

router.get('/:id', protectedRoute, getMessages)
router.post('/send/:id', protectedRoute, sendMessage)

export default router