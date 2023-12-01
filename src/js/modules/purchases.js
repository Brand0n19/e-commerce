class Purchase {
    constructor(id, img, talla, color, precio,cantidad) {
        this.id = id;
        this.img = img;
        this.talla = talla;
        this.color = color;
        this.precio = precio;
        this.cantidad = cantidad;
    }
      agregarPurchases(){
        return `
        <div class="col-12 border-top border-bottom" id="${id}">
            <div class="row justify-content-between align-items-center">
                <div class="col imagen">
                    <img class="img-fluid" width="50%" src="${imagen}" alt="">
                </div>
                <div class="col-5 content text-center s-font">
                    <p><span class="fw-bolder">Color: </span>${color}</p>
                    <p><span class="fw-bolder">Talla: </span>${talla}</p>
                </div>
                <div class="col-2 cost text-center s-font">
                    S/. ${precio}
                </div>
                <div class="col-1 quantity text-center s-font">
                    ${cantidad}
                </div>
            </div>
        </div>`;          
      }
  }

// Exporta la clase Clothe
export {Purchase};