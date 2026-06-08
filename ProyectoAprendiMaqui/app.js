import cors from 'cors';
import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';

import { vehiculo } from './Backend/Controller/controllers.js';
dotenv.config();
mongoose.connect(process.env.url_bd)
.then(()=>console.log("se conecto correctanete"))
.catch((error)=>console.log("No se coencto correcto"))

const app=express();
app.use(cors());
app.listen(400,()=>console.log("Correindo en el puerto 400"));

vehiculo();
