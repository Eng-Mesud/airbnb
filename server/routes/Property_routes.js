import express from "express";
import { AddProperteis, SearcupdateProperty, UpdatedProperty, deleteproperteis, getCount_Property, getProperteis, getproperty_Option } 
from "../Controller/PropertyController.js";

export const PropertyRoute = express.Router()



PropertyRoute.post('/api/Add_Properteis',AddProperteis);
PropertyRoute.get('/api/listProperteis',getProperteis);
PropertyRoute.get('/api/editProperty/:id',SearcupdateProperty);
PropertyRoute.get('/api/listProperteisOption',getproperty_Option);
PropertyRoute.put('/update_Property/:id',UpdatedProperty);
PropertyRoute.get('/api/getCount_property',getCount_Property)
PropertyRoute.delete('/deleteProperteis/:id',deleteproperteis);