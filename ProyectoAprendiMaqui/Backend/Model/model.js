import {Schema, model} from 'mongoose';

const Esqueleto = new Schema({

    marca:String,
    modelo:String,
    precio:Number
});

export const Tabla = new model ("Tabla de Automoviles", Esqueleto);