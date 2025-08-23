import express from 'express';
import { Holdings, Login, NewOrders, Orders, Positions, Signup } from '../controllers/UserController.js';

const UserRouter = express.Router();

UserRouter.post("/signup", Signup);
UserRouter.post("/login", Login);
UserRouter.get("/allHoldings", Holdings);
UserRouter.get("/allPositions", Positions);
UserRouter.get("/allOrders", Orders);
UserRouter.post("/newOrders", NewOrders);

export default UserRouter;