import userRouter from './components/v1.0/user';
import express from 'express';

const router = express.Router();

router.use('/Auth', userRouter);

export default router;
