import { Purchase } from './purchases.js';//aca se encuentra la clase

let purchasesList = []
let contador = 0;
function fillPurchases() {
    const urlParameters = new URLSearchParams(window.location.search);
    
    const id = (urlParameters.get('id'));
    const imagen = (urlParameters.get('imagen'));
    const talla = urlParameters.get('talla');
    const color = (urlParameters.get('color'));
    const precio = (urlParameters.get('precio'));
    const cantidad = urlParameters.get('cantidad');
    
    //verificando si hay parametros existentes 
    purchasesList = localStorage.getItem("lstClothes") ? JSON.parse(localStorage.getItem("lstClothes")) : [];


    // Verificar si los parámetros son null
    if (id && imagen && talla && color && precio && cantidad) {
        const purchases = new Purchase();
        purchases.id = id;
        purchases.img = imagen;
        purchases.talla = talla;
        purchases.color = color;
        purchases.precio = precio;
        purchases.cantidad = cantidad;

        purchasesList.push(purchases);
        
        const purchasesJson = JSON.stringify(purchasesList)

        localStorage.setItem("lstClothes", purchasesJson);
    } else {
        console.log("Los parámetros de la URL son null");
    }
}
document.addEventListener("DOMContentLoaded", fillPurchases)

console.log(purchasesList);
function loadPurchasesList(){
    const contadorContent = document.querySelectorAll(".shop-quantity");
    const productContent = document.querySelector("#shop-list");
    if(localStorage.getItem("lstClothes")){
        let lstClothesSaved = JSON.parse(localStorage.getItem("lstClothes"))
        console.log(lstClothesSaved);

        let lstClothesSavedBack = lstClothesSaved.reverse();

        lstClothesSavedBack.forEach(e => {
            contador = contador + 1;
            const productQuantity = document.querySelector("#shop-quantity");
            productQuantity.innerHTML = `${contador}`;

            if (productContent) {
                productContent.innerHTML += `
                        <div class="col-12 border-top border-bottom" id="${e.id}">
                            <div class="row justify-content-between align-items-center">
                                <div class="col imagen">
                                    <img class="img-fluid" width="50%" src="${e.img}" alt="">
                                </div>
                                <div class="col-5 content text-center s-font">
                                    <p><span class="fw-bolder">Color: </span>${e.color}</p>
                                    <p><span class="fw-bolder">Talla: </span>${e.talla}</p>
                                </div>
                                <div class="col-2 cost text-center s-font">
                                    S/. ${e.precio}
                                </div>
                                <div class="col-1 quantity text-center s-font">
                                    ${e.cantidad}
                                </div>
                                <div class="col-1 btn btn-drop quantity text-center s-font">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle " viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                              </svg>
                                </div>
                            </div>
                        </div>
                        `;
                        
                const btnDop = document.querySelector(".btn-drop");

                if(btnDop){
                    btnDop.addEventListener("click", () => dropPurchase(e.id));
                }  
            }
        });

    }else{
        const cleanContent = document.querySelector("#shop-list");
        contadorContent.innerHTML = "0"
        cleanContent.innerHTML = `<div class="s-font mt-5 px-3 text-center display-5">No hay productos en el carrito</div>`;
    }

    contadorContent.innerHTML = contador;
}

document.addEventListener("DOMContentLoaded",loadPurchasesList);

function dropPurchase(id){
    purchasesList = purchasesList.filter( buy => buy.id !== id);
    updatePurchase();
    location.reload();
    loadPurchasesList();
}

function updatePurchase() {
    localStorage.setItem("lstClothes", JSON.stringify(purchasesList));
}



export {loadPurchasesList}

