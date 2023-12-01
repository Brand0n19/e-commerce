document.addEventListener("DOMContentLoaded", function(){
    const urlParameters = new URLSearchParams(window.location.search);

    const id = (urlParameters.get('id'));
    const nombre = decodeURIComponent(urlParameters.get('name'));
    const detalle = decodeURIComponent(urlParameters.get('detalle'));
    const imagen = decodeURIComponent(urlParameters.get('img'));
    const precio = decodeURIComponent(urlParameters.get('precio'));
    const color = decodeURIComponent(urlParameters.get('color'));
    const discount = urlParameters.get('discount');

    const productContent = document.getElementById("shop-content");

    if(discount == "true"){
        productContent.innerHTML = `
        <div class="col-md-6 shop-img" >
            <img src="${imagen}" class="img-fluid" alt="">
        </div>
        <div class="col-md-5 my-4 my-md-auto">
            <h1 class="product-name fw-bolder mb-5 t-font">${nombre}</h1>
            <p class="mb-3 s-font">${detalle}</p>
            <p class="mb-3 s-font"><span class="fw-bolder">Color:</span> ${color}</p>
            <p class="mb-3 s-font fw-bolder price price-discount">S/. ${precio}</p>
            <form action="" class="form" id="formBuy">
                <div class="row justify-content-between align-items-center">
                    <div class="input-group mb-3 s-font">
                        <select class="form-select" id="inputGroupSelect01">
                        <option selected>Talla</option>
                        <option value="L">L</option>
                        <option value="M">M</option>
                        <option value="S">S</option>
                        </select>
                    </div>
                    <div class="row m-0 justify-content-between">
                        <div class="col p-0">
                            <input type="number" class="fomr-control text-center" name="" id="cantidad" value="1" min="1" max="10">
                        </div>
                        <div class="col p-0">
                            <button class="btn m-0 fw-bold comprar-btn" type="submit" id="${id}">Comprar</button>
                        </div>
                    </div>
                </div>
            </form>
            <div class="s-font mt-3" id="show-alert"></div>
        </div>    
        
        `;        
        
    }else{

        productContent.innerHTML = `
        <div class="col-md-6" >
            <img src="${imagen}" class="img-fluid" alt="">
        </div>
        <div class="col-md-5 my-4 my-md-auto">
            <h1 class="product-name fw-bolder mb-5 t-font">${nombre}</h1>
            <p class="mb-3 s-font">${detalle}</p>
            <p class="mb-3 s-font"><span class="fw-bolder">Color:</span> ${color}</p>
            <p class="mb-3 s-font fw-bolder price">S/. ${precio}</p>
            <form action="" class="form" id="formBuy">
                <div class="row justify-content-between align-items-center">
                    <div class="input-group mb-3 s-font">
                        <select class="form-select" id="inputGroupSelect01" required>
                        <option selected>Talla</option>
                        <option value="L">L</option>
                        <option value="M">M</option>
                        <option value="S">S</option>
                        </select>
                    </div>
                    <div class="row m-0 justify-content-between">
                        <div class="col p-0">
                            <input type="number" class="fomr-control text-center" name="" id="cantidad" value="1" min="1" max="10">
                        </div>
                        <div class="col p-0">
                            <button class="btn m-0 fw-bold comprar-btn" type="submit" id="${id}">Comprar</button>
                        </div>
                    </div>
                </div>
            </form>
            <div class="s-font mt-3" id="show-alert"></div>
        </div>    
        
        `;
    }


})

document.addEventListener("DOMContentLoaded", function() {

    const urlParameters = new URLSearchParams(window.location.search);

    const id = (urlParameters.get('id'));
    const imagen = decodeURIComponent(urlParameters.get('img'));
    const precio = decodeURIComponent(urlParameters.get('precio'));
    const color = decodeURIComponent(urlParameters.get('color'));
    const discount = urlParameters.get('discount');

    let formulario = document.getElementById("formBuy");
  
    formulario.addEventListener("submit", function(event) {
      event.preventDefault();
        
      const talla = document.getElementById("inputGroupSelect01").value;
      const cantidad = document.getElementById("cantidad").value;
        //codigo para mostrat la alerta
        const alerta = document.createElement("div");
        alerta.className = "alert alert-success";
        alerta.setAttribute("role", "alert");
        alerta.textContent = "¡Prenda agregada al carrito!";

        const alertaDanger = document.createElement("div");
        alertaDanger.className = "alert alert-danger";
        alertaDanger.setAttribute("role", "alert");
        alertaDanger.textContent = "Elija su talla";

        const show = document.getElementById("show-alert");



        if(talla !== 'L' && talla !== 'M' && talla !== 'S' ){
            show.insertAdjacentElement('afterend', alertaDanger);

        }else{
            show.insertAdjacentElement('afterend', alerta);

            if(discount == "true"){
                const precioNum = parseInt(precio);
                const newPrecio = precioNum - (precioNum * 0.2);
                //envio de la informacion 
                setTimeout(() => {
                    const urlTo = `./purchases.html?id=${id}&imagen=${imagen}&precio=${newPrecio}&color=${color}&talla=${talla}&cantidad=${cantidad}`;
                    window.location.href = urlTo;
                }, 1200);
    
            }else{
                
                //envio de la informacion 
                setTimeout(() => {
                    const urlTo = `./purchases.html?id=${id}&imagen=${imagen}&precio=${precio}&color=${color}&talla=${talla}&cantidad=${cantidad}`;
                    window.location.href = urlTo;
                }, 1200);
    
            }

        }

    });
  });
  


