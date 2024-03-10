
import express from 'express'
import { createTour, deleteTour, getAllTour, getSingleTour, updateTour } from '../Controllers/trueController.js'

const router = express.Router()

// create new tour
router.post('/', createTour)

// update  tour
router.post('/:id', updateTour)

// delete tour
router.post('/:id', deleteTour)

// get single tour
router.post('/:id', getSingleTour)

// create new tour
router.post('/:id', getAllTour)

export default router