import express from "express";



import { getReborts } from "../Controller/RebortsController.js";


export const RebortsRoute = express.Router()




RebortsRoute.get('/api/Reborts',getReborts);