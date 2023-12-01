class Clothe {
    constructor(id, nombre, detalle, img, tipo, color, discount, precio) {
        this.id = id;
        this.nombre = nombre;
        this.detalle = detalle;
        this.img = img;
        this.tipo = tipo;
        this.color = color;
        this.discount = discount;
        this.precio = precio;
    }
      agregarHtmlProducts(){
        return `
          <div class="col-12 col-sm-6 product-card col-md-4 my-3">
              <div class="card text-center product-content" style="width: 100%;" id="${this.id}">
                  <div class="img-dad border-bottom">
                  <img src="${this.img}" class="card-img-top " alt="...">                  
                  </div>
                  <div class="card-body">
                      <h5 class="card-title s-font">${this.nombre}</h5>
                      <p class="card-text t-font">S/. ${this.precio}</p>
                      <a href="#" class="btn carrito-btn s-font btn-primary">Ver</a>
                  </div>
              </div> 
          </div>`;          
      }
      agregarHtmlDiscount(){
        return `
        <div class="col-12 col-sm-6 sale-card col-md-4 my-3">
          <div class="card text-center" style="width: 100%;" id="${this.id}">
                <div class="img-dad border-bottom">
                <img src="${this.img}" class="card-img-top " alt="...">
                </div> 
              <div class="card-body">
                  <h5 class="card-title s-font">${this.nombre}</h5>
                  <p class="card-text t-font">S/. ${this.precio}</p>
                  <a href="#" class="btn carrito-btn s-font btn-primary">Ver</a>
              </div>
          </div> 
        </div>`;
      }
  }

// Exporta la clase Clothe
export default Clothe;