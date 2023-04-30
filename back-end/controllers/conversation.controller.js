import createError from "../utils/createError";
import { Conversation } from '../models';

export const createConvsersation = async (req, res, next) => {

    const newConvsersation = new Conversation({
        id: req.isSeller ? req.userId + req.body.to : req.body.to + req.userId,
        sellerId: req.isSeller ? req.userId : req.body.to,
        buyerId: req.isSeller ? req.body.to : req.userId,
        readBySeller: req.isSeller,
        readByBuyer: !req.isSeller,
    });

    try {

        const savedConvsersation = await newConvsersation.save();
        res.status(201).send(savedConvsersation);
    } catch (error) {
        next(error)
    }

}


export const updateConvsersation = async (req, res, next) => {

    try {
        const updatedConvsersation = await Conversation.findOneAndUpdate(
            { id: req.params.id },
            {
                $set: {
                    ...(req.isSeller ? { readBySeller: true } : { readByBuyer: true })
                }
            },
            { new: true }
        )

        res.status(200).send(updateConvsersation);
    } catch (error) {
        next(error)
    }

}


export const getSingleConvsersation = async (req, res, next) => {

    try {

        const convsersation = await Conversation.findOne({ id: req.params.id });
        if (!convsersation) return next(createError(404, 'not found'));
        res.status(200).send(convsersation);
    } catch (error) {
        next(error)
    }

}


export const getConvsersation = async (req, res, next) => {
    try {
        const convsersations = await Conversation.find(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }).sort({ updatedAt: -1 });
        // console.log(convsersations)
        res.status(200).send(convsersations)
    } catch (error) {
        next(error)
    }

}




