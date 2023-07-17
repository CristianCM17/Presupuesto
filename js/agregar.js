
export default class agregar{

    constructor(){
        this.ingresos=null;
        this.listaIngresos=document.getElementById("listaIngresos");
    }

    setIngresos(ingresos){
            this.ingresos=ingresos;
    }



    /*render() {
        const ingresos = this.ingresos.getIngresos();
       // for (const todo of todos) {
         // this.addrow(todo);
        //}
        ingresos.forEach((ingreso) => this.crearFila(ingreso))
      }*/

      borrarFila(id) {
        this.ingresos.borrarFila(id);
        document.getElementById(id).remove(id);
    
      
    }




    crearFila(ingreso){
        console.log(ingreso);
        const nuevaFila = document.createElement('div');
        nuevaFila.classList.add('elemento', 'limpiarEstilos');
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
        botonEliminar.addEventListener('click', () => this.borrarFila(ingreso.id));
      
        this.listaIngresos.appendChild(nuevaFila);

       

/*
        var divElementoEliminar = document.getElementsByTagName(this.id);
        
       

        const botonEliminar = document.createElement('button');
        botonEliminar.classList.add('elemento_eliminar--btn');
        botonEliminar.setAttribute('id', this.idButton);
        botonEliminar.innerHTML='  <ion-icon name="close-circle-outline"></ion-icon>';
        botonEliminar.onclick = ()=> this.borrarFila(ingreso.id); 
        console.log(ingreso.id);
        divElementoEliminar.appendChild(botonEliminar);
        
*/
      
    }


}