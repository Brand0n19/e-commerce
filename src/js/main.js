import Clothe from './modules/clothe.js'; //aca se encuentra la clase Clothe y sus atributos, mas codigo html para ser llamada por las funciones de dom-handlers.js
import { fillContentClothesAll, fillDiscount } from './modules/dom-handlers.js';
import { loadPurchasesList } from './modules/purchase-handler.js';

import changeBackground from './utilities/carousel.js';
let clotheList = [];  

document.addEventListener("DOMContentLoaded",async function getClothesList(){
      
      try {
        const response = await fetch('../../data/products.json'); 
        const data = await response.json();
    
        // Llenar la variable global clotheList
        clotheList = data.map(product => new Clothe(
          product.id,
          product.nombre,
          product.detalle,
          product.img,
          product.tipo,
          product.color,
          product.discount,
          product.precio
        ));
        //funciones
      fillDiscount();
      fillContentClothesAll();
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }

    });

document.addEventListener("DOMContentLoaded",loadPurchasesList);
document.addEventListener('DOMContentLoaded', changeBackground);
export {clotheList};