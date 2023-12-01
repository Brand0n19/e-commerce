import {clotheList} from '../main.js'

function clickShopAll(){
    //evento click
    const clotheContent = document.querySelectorAll('.carrito-btn');
    
    clotheContent.forEach((boton, index) =>{
      boton.addEventListener('click',()=>{
        const choosedProduct = clotheList[index];    
        window.location.href = `products-items.html?id=${choosedProduct.id}&name=${encodeURIComponent(choosedProduct.nombre)}&detalle=${encodeURIComponent(choosedProduct.detalle)}&img=${encodeURIComponent(choosedProduct.img)}&precio=${encodeURIComponent(choosedProduct.precio)}&color=${encodeURIComponent(choosedProduct.color)}&tipo=${encodeURIComponent(choosedProduct.tipo)}&discount=${choosedProduct.discount}`;
      })
    
    })
  
}



function clickShopType(){
    //evento click
    const clotheContent = document.querySelectorAll('.carrito-btn');
    
    function handleClick(e){
        const index = e.currentTarget.dataset.index;
        const choosedProduct = clotheList[index];
        
        window.location.href = `products-items.html?id=${choosedProduct.id}&name=${encodeURIComponent(choosedProduct.nombre)}&detalle=${encodeURIComponent(choosedProduct.detalle)}&img=${encodeURIComponent(choosedProduct.img)}&precio=${encodeURIComponent(choosedProduct.precio)}&color=${encodeURIComponent(choosedProduct.color)}`;
    }
    
    clotheContent.forEach((boton, index) =>{
        boton.dataset.index = index;
        boton.addEventListener('click', handleClick);
    });
    
}

//filtrar
document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("form-clothe")

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Corregir aquí

        const selectType = document.getElementById("selected-clothe")
        let selectedOption = selectType.value;
        console.log(selectedOption);

        if (!selectedOption || selectedOption === "all") {
            fillContentClothesAll();
        } else {
            fillContentByClothes(selectedOption);
        }
    })
})

// Para mostrar toda la ropa
function fillContentClothesAll(){
    const clotheContainer = document.querySelector(".card-dad");
    
    if (clotheContainer) {
        clotheList.forEach(element => {
            if (element.discount) {
                clotheContainer.innerHTML += element.agregarHtmlDiscount();
            } else {
                clotheContainer.innerHTML += element.agregarHtmlProducts();
            }
        });

        clickShopAll();
    }
}

function fillContentByClothes(type) {
    const typeClothesContainer = document.querySelector(".card-dad");

    if (typeClothesContainer) {

        typeClothesContainer.innerHTML = '';

        function processProduct(producto) {
            if (producto.tipo === type) {
                typeClothesContainer.innerHTML += producto.agregarHtmlProducts();
            } else {
                console.log('Tipo de prenda no reconocido:', producto.tipo);
            }
        }

        clotheList.forEach(processProduct);

        clickShopType();
    } else {
        console.error(`Elemento con clase '${classname}' no encontrado.`);
    }
}




function fillDiscount(){  
    clotheList.forEach(element => {
      if(element.discount === true){
        const clotheContainer = document.querySelector(".sale-dad");
        
        if(clotheContainer){
            clotheContainer.innerHTML += element.agregarHtmlDiscount();          
        }
      }else{
        return '<p class="s-font text-center">No hay prendas en decuento por el momento</p>';
      }
    });
    clickShopAll();
}
  

//Funcion Comprar
function buyClothes(){
    //evento click
    const clotheContent = document.querySelectorAll('.carrito-btn');

    clotheContent.forEach((boton, index) =>{
        boton.addEventListener('click',()=>{
        const choosedProduct = clotheList[index];

        window.location.href = `products-items.html?id=${choosedProduct.id}&name=${encodeURIComponent(choosedProduct.nombre)}&detalle=${encodeURIComponent(choosedProduct.detalle)}&img=${encodeURIComponent(choosedProduct.img)}&precio=${encodeURIComponent(choosedProduct.precio)}&color=${encodeURIComponent(choosedProduct.color)}&discount=${choosedProduct.discount}`;
        })

})

}
  
// Exporta las funciones
export {
    fillContentClothesAll,
    fillDiscount,
    fillContentByClothes,
    buyClothes
}; 