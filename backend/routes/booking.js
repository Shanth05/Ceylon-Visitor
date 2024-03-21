import express from 'express'
import { verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

router.post("/", verifyUser)


export default router
