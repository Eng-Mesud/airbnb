import express from "express";


import { AddRent } from "../Controller/RentConbtroller.js";
import { getMembers } from "../Controller/MembersController.js";

export const RentRoute = express.Router()



RentRoute.post('/api/Add_rents',AddRent);
