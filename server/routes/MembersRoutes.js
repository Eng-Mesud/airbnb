import express from "express";

import { AddMembers, SearcupdateMembers, UpdatedMembers, deleteMembers, getMembers, getMembers_Option } from "../Controller/MembersController.js";

export const memberroutes = express.Router()


memberroutes.post('/api/Add_Members',AddMembers);
memberroutes.get('/api/listMembers',getMembers);
memberroutes.get('/api/editMembers/:id',SearcupdateMembers);
memberroutes.put('/Members_updated/:id',UpdatedMembers);
memberroutes.delete('/deleteMembers/:id',deleteMembers);


memberroutes.get('/api/listMembersOption',getMembers_Option);