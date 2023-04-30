import createError from '../utils/createError';
import { Review, Gig } from '../models';

export const createReview = async (req, res, next) => {

    if (req.isSeller) return next(createError(406, 'sellers cant create a review'));
    const userId = req.userId
    const { gigId, desc, star } = req.body
    const newReview = new Review({
        userId, gigId, desc, star
    });

    try {
        const review = await Review.findOne({ gigId, userId });

        if (review) return next(createError(403, 'you have already created a review for this gig.'));

        const savedReview = await newReview.save();

        await Gig.findByIdAndUpdate(gigId, { $inc: { totalStars: star, starNumber: 1 } });

        res.status(201).send(savedReview);
    } catch (error) {
        return next(error)
    }
}


export const getReviews = async (req, res, next) => {
    const { gigId } = req.params
    try {
        const reviews = await Review.find({ gigId });
        res.status(200).send(reviews)
    } catch (error) {
        next(error);
    }
}

export const deleteReview = async (req, res, next) => {
    try {

    } catch (error) {

    }
}
