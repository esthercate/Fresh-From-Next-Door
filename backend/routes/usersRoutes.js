import express from 'express';
import {
  registerUser,
  loginUser,
  getUsers,
} from '../controllers/usersController.js';
import userDocs from '../documentation/usersDocs.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/all', getUsers);

// place this after routes for it to work
userDocs(router);

export default router;
