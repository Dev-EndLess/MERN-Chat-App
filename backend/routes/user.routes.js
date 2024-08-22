import { Router } from 'express'
import protectedRoute from '../middleware/protectedRoutes.js'
import { getUsersSideBar } from '../controllers/user.controller.js'

const router = Router()

router.get('/', protectedRoute, getUsersSideBar)

export default router