import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import {PropertyRoute} from './routes/Property_routes.js';
import {  memberroutes } from './routes/MembersRoutes.js';
import { RentRoute } from './routes/rentsRoutes.js';
import { RebortsRoute } from './routes/Rebortsroutes.js';
import { RoutesUser } from './routes/User_routes.js';
const app = express();


mongoose.connect('mongodb+srv://user0122:user11@cluster0.fzmcorz.mongodb.net/Airbnb?retryWrites=true&w=majority')
app.use(cors())
// app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
const port = 2023 || process.env.PORT
app.listen(port,()=>{
    console.log('port runing on '
    +port)
})
app.use(express.json());
app.use(PropertyRoute,memberroutes,RentRoute,RebortsRoute,RoutesUser)