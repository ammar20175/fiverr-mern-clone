import express from 'express'
import {
    createReview,
    getReviews,
    deleteReview,
} from '../controllers/review.controller'
import verifyToken from '../middlewares/jwt'

const reviewRouter = express.Router()

reviewRouter.post('/', verifyToken, createReview)
reviewRouter.get('/:gigId', getReviews);
reviewRouter.delete('/:id', deleteReview)
export default reviewRouter