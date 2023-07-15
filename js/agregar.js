
export default class agregar{

    constructor(){
        this.listaIngresos=document.getElementById("listaIngresos");
    }


    

    crearFila(ingreso){
        console.log(ingreso);
        this.listaIngresos.innerHTML=`                  
<div class="elemento limpiarEstilos">
        <div class=" elemento_descripcion">
            ${ingreso.descripcion}
        </div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">
                ${ingreso.valor}
            </div>
            <div class="elemento_eliminar">
                <button class='elemento_eliminar--btn'>
                    <ion-icon name='close-outline'></ion-icon>
                </button>
            </div>
        </div>
</div>`

    }
}