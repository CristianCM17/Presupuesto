export default class ingresos{

    constructor(){
        this.ingresos =[];
        this.id=1;
    }



    getIngresos(){
        return this.ingresos;
    }
    

    agregarIngreso(descripcion,valor){
        let ingreso={
            id:this.id++,
            descripcion,
            valor,
        };

       this.ingresos.push(ingreso);
       console.log(this.ingresos)
        return {...ingreso}

    }

    borrarFila(id) {
        const index= this.ingresos.filter((ingreso) => ingreso.id===id);
        this.ingresos.splice(index,1);

    }
}