//avance 3
//calses HIJA INGRESO

class Ingreso extends Dato {
    static contadorIngresos = 0;
  
    constructor(descripcion, valor) {
      super(descripcion, valor);
  
      this._id = ++Ingreso.contadorIngresos;
    }
  
    get id() {
      return this._id;
    }
  }

 

