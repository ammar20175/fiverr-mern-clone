import express from 'express'
import { PORT } from './config';
import connectDB from './database/connection';
import { userRouter, gigRouter, messageRouter, orderRouter, reviewRouter, conversationRouter, authRouter } from './routes';
import cookieParser from 'cookie-parser';
import cors from 'cors'

const app = express();
connectDB();

//middlewares.

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/gigs', gigRouter);
app.use('/api/orders', orderRouter);
app.use('/api/conversations', conversationRouter);
app.use('/api/messages', messageRouter);
app.use('/api/reviews', reviewRouter)



//for error handling
app.use((error, req, res, next) => {
    const errorStatus = error.status || 500;
    const errorMessage = error.message || 'something went wrong'

    return res.status(errorStatus).send(errorMessage);
});


app.listen(PORT, () => {
    console.log(`fiverr server is on port ${PORT} `)
});