
export default class agregar{

    constructor(){
        this.ingresos=null;
        this.listaIngresos=document.getElementById("listaIngresos");
        this.id=1;
        this.idButton=1;
        
    }

    setIngresos(ingresos){
            this.ingresos=ingresos;
    }

    render() {
        const ingresos = this.ingresos.getIngresos();
       // for (const todo of todos) {
         // this.addrow(todo);
        //}
        ingresos.forEach((ingreso) => this.crearFila(ingreso))
      }




    crearFila(ingreso){
        console.log(ingreso);
        this.id++;
        this.idButton++;
        this.listaIngresos.innerHTML+=`                  
<div class="elemento limpiarEstilos" id=${ingreso.id}>
        <div class=" elemento_descripcion">
            ${ingreso.descripcion}
        </div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">
                ${ingreso.valor}
            </div>
            <div class="elemento_eliminar" id=${this.id}>
              
            </div>
        </div>
</div>`

        var divElementoEliminar = document.getElementById(this.id);

       

        const botonEliminar = document.createElement('button');
        botonEliminar.classList.add('elemento_eliminar--btn');
        botonEliminar.setAttribute('id', this.idButton);
        divElementoEliminar.appendChild(botonEliminar);
        

        var icono= document.getElementById(this.idButton);

        if (icono){
            const icono=document.createElement('ion-icon');
            icono.setAttribute('name', 'close-circle-outline');
            botonEliminar.appendChild(icono);
        }
      
    }

   borrarFila(id) {
        document.getElementById(id).remove(id);
    }
}