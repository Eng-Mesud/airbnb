import express from 'express'
import { AddnewUser, deleteUsers, getLogin, getUser, logOut, login, verifyUser } from '../Controller/UserController.js';

export const RoutesUser = express.Router()

RoutesUser.post("/users",AddnewUser);
RoutesUser.get("/userReading",getUser);
RoutesUser.delete("/deleteuser",deleteUsers);
RoutesUser.post("/login",login);
RoutesUser.get('/',verifyUser,getLogin);
RoutesUser.get('/logout',logOut);