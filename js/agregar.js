export default class agregar {
  constructor() {
    this.ingresos = null;
    this.egresos = null;
    this.listaIngresos = document.getElementById("listaIngresos");
    this.listaEgresos = document.getElementById("listaEgresos");
  }

  setIngresos(ingresos) {
    this.ingresos = ingresos;
  }

  setEgresos(egresos) {
    this.egresos = egresos;
  }

  /*render() {
        const ingresos = this.ingresos.getIngresos();
       // for (const todo of todos) {
         // this.addrow(todo);
        //}
        ingresos.forEach((ingreso) => this.crearFila(ingreso))
      }*/

  borrarFilaIngreso(id) {
    this.ingresos.borrarFila(id);
    document.getElementById(id).remove(id);
  }

  borrarFilaEgreso(id) {
    this.egresos.borrarFila(id);
    document.getElementById(`EgresoFila-${id}`).remove(`EgresoFila-${id}`);
  }

  crearFilaIngreso(ingreso) {
    console.log(ingreso);
    const nuevaFila = document.createElement("div");
    nuevaFila.classList.add("elemento", "limpiarEstilos");
    nuevaFila.id = ingreso.id;

    nuevaFila.innerHTML = `
          <div class="elemento_descripcion">
            ${ingreso.descripcion}
          </div>
          <div class="derecha limpiarEstilos">
            <div class="elemento_valor">
              ${ingreso.valor}
            </div>
            <div class="elemento_eliminar">
              <button class="elemento_eliminar--btn" id="btnEliminar-${ingreso.id}">
                <ion-icon name="close-circle-outline"></ion-icon>
              </button>
            </div>
          </div>`;

    const botonEliminar = nuevaFila.querySelector(`#btnEliminar-${ingreso.id}`);
    botonEliminar.addEventListener("click", () => {
      this.borrarFilaIngreso(ingreso.id);
    });

    this.listaIngresos.appendChild(nuevaFila);
  }

  crearFilaEgreso(egreso) {
    console.log(egreso);
    const nuevaFila = document.createElement("div");
    nuevaFila.classList.add("elemento", "limpiarEstilos");
    nuevaFila.id = `EgresoFila-${egreso.id}`;

    nuevaFila.innerHTML = `
        <div class="elemento_descripcion">
          ${egreso.descripcion}
        </div>
        <div class="derecha limpiarEstilos">
          <div class="elemento_valor">
            ${egreso.valor}
          </div>
          <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn" id="btnEliminar-${egreso.id}">
              <ion-icon name="close-circle-outline"></ion-icon>
            </button>
          </div>
        </div>`;

    const botonEliminar = nuevaFila.querySelector(`#btnEliminar-${egreso.id}`);
    botonEliminar.addEventListener("click", () => {
      this.borrarFilaEgreso(egreso.id);
    });

    this.listaEgresos.appendChild(nuevaFila);
  }


  RestarIngresosEgresos(){
     return this.ingresos.sumar()-this.egresos.sumar();
  }
}
