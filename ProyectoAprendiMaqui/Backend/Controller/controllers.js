import { Tabla } from "../Model/model.js";

Tabla.create({

    marca:"Toyota",
    modelo:"Corolla", 
    precio: 150000

}, {

    marca:"Honda",
    modelo:"Civic", 
    precio: 120000

}, {

    marca:"Nissan",
    modelo:"Versa", 
    precio: 130000

})
export const vehiculo =()=>console.log("Exportando")

