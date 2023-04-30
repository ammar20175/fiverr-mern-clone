import express from 'express'
import {
    createGig,
    deleteGig,
    getGig,
    getGigs
} from '../controllers/gig.controller'

const gigRouter = express.Router()
import verifyToken from '../middlewares/jwt'


gigRouter.post('/', verifyToken, createGig);
gigRouter.delete('/:id', verifyToken, deleteGig);
gigRouter.get('/single/:id', getGig);
gigRouter.get('/', getGigs);

export default gigRouter