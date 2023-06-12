import express from 'express';
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUSer,
  getUserProfile,
  updateUserProfile
} from '../controllers/userController.js';

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUSer);
router.route('/profile').get(getUserProfile).put(updateUserProfile);

export default router;
