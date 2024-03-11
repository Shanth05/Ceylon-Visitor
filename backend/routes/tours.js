
import express from 'express'
import { createTour, deleteTour, getAllTour, getSingleTour, updateTour } from '../Controllers/trueController.js'

const router = express.Router()

// create new tour
router.post('/', createTour)

// update  tour
router.put('/:id', updateTour)

// delete tour
router.delete('/:id', deleteTour)

// get single tour
router.get('/:id', getSingleTour)

// create new tour
router.get('/', getAllTour)

export default router