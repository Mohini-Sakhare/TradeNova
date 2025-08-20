import express from 'express';
import { Login, Signup } from '../controllers/UserController.js';

const UserRouter = express.Router();

UserRouter.post("/signup", Signup);
UserRouter.post("/login", Login);

export default UserRouter;