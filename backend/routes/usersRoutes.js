import express from 'express';
import {
  registerUser,
  loginUser,
  getUsers,
} from '../controllers/usersController.js';
import userDocs from '../documentation/usersDocs.js';

const router = express.Router();
userDocs(router);

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/all', getUsers);

export default router;
