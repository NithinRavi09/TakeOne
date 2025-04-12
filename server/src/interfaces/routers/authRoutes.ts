import express from 'express';
import { authController } from '../controllers/authContoller';

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);

export default router;