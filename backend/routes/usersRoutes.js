import express from 'express';
import {
  registerUser,
  loginUser,
  getUsers,
} from '../controllers/usersController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/all', getUsers);

export default router;
