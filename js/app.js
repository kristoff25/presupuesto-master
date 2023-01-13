
//AVANCE3 Arreglos
const egresos = [];
const ingresos = [];

//avance 4
document.body.onload = cargarApp;

//avance 4
function cargarApp() {
  cargarCabecero();
  cargarIngresos();
  cargarEgresos();

}

//Avance 3
ingresos.push(new Ingreso('Salario', 20000));
ingresos.push(new Ingreso('Venta auto', 50000));
egresos.push(new Egreso('Renta', 4000));
egresos.push(new Egreso('Ropa', 800));
ingresos.push(new Ingreso('casa', 1000));

const formatoMoneda = (valor) => {
  return valor.toLocaleString("es-MX", {style: "currency", currency: "MXN", minimumFractionDigits: 2});
}
const formatoPorcentaje = (valor) => {
  return valor.toLocaleString("es-MX", {style: "percent", minimumFractionDigits: 2});
}

//Avance 4

function cargarCabecero() {
  let presupuesto = sumarIngresos() - sumarEgresos();
  let porcentajeEgreso = sumarEgresos() / sumarIngresos();
  const presupuestoElement = document.getElementById('presupuesto');
  const porcentajeElement = document.getElementById('porcentaje');
  const ingresosElement = document.getElementById('ingresos');
  const egresosElement = document.getElementById('egresos');

  presupuestoElement.innerHTML = formatoMoneda(presupuesto);
  porcentajeElement.innerHTML = formatoPorcentaje(porcentajeEgreso);
  ingresosElement.innerHTML = formatoMoneda(sumarIngresos(ingresos));
  egresosElement.innerHTML = formatoMoneda(sumarEgresos(egresos));
}

//Avance 4
const cargarIngresos = () => {
  let ingresosHTML = '';

  for (const ingreso of ingresos) {
    ingresosHTML += crearIngresoHTML(ingreso);
  }
  document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}

//avance 4
const crearIngresoHTML = (ingreso) => {
  ingresoHTML = `
  <div id="lista-ingresos">
    <div class="elemento limpliarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha limpliarEstilos">
        <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline" onclick="eliminarIngreso (${ingreso.id})"></ion-icon>
            </button>
        </div>
    </div>
    </div>      
  </div>  
  `
  return ingresoHTML;

  }

  //avance 4
  const cargarEgresos = () => {
    let egresosHTML = '';
  
    for (const egreso of egresos) {
      egresosHTML += crearEgresoHTML(egreso);
    }
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
  }
  
// avance 4
  const crearEgresoHTML = (egreso) => {
    egresoHTML = `
    <div id="lista-egresos">
      <div class="elemento limpliarEstilos">
      <div class="elemento_descripcion">${egreso.descripcion}</div>
      <div class="derecha limpliarEstilos">
          <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
          <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/sumarEgresos())}</div>
          <div class="elemento_eliminar">
              <button class="elemento_eliminar--btn">
                  <ion-icon name="close-circle-outline" onclick='eliminarEgreso(${egreso.id})'></ion-icon>
              </button>
          </div>
      </div>
      </div>      
    </div>  
    `
    return egresoHTML;
  
    }
 
  //avance 4
  const eliminarIngreso = (id) => {
      const indiceEliminar = ingresos.findIndex((ingreso) => {
          return ingreso.id === id;
      });
      ingresos.splice(indiceEliminar, 1);
      cargarCabecero();
      cargarIngresos();
  }

  const eliminarEgreso = (id) => {
    const indiceEliminar = egresos.findIndex((egreso) => {
        return egreso.id === id;
    });
    egresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarEgresos();
    }

//avance 4
let agregarDato = () => {
  let forma = document.forms['forma'];
  let tipo = forma['tipo'];
  let descripcion = forma['descripcion'];
  let valor = forma['valor'];
  if(descripcion.value !== '' && valor.value !== ''){
      if(tipo.value === 'ingreso'){
          ingresos.push(new Ingreso(descripcion.value, +valor.value));
          cargarCabecero();
          cargarIngresos();

      }
      else if(tipo.value === 'egreso'){
          egresos.push(new Egreso(descripcion.value, +valor.value));
          cargarCabecero();
          cargarEgresos();
      }
  }
}


  //avance3
  function sumarIngresos() {
    let total = 0;
    for (let ingreso of ingresos) {
      total += ingreso.valor;
    }
    return total;
  }
  
  function sumarEgresos() {
    let total = 0;
    for (let egreso of egresos) {
      total += egreso.valor;
    }
    return total;
  }
