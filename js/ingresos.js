export default class ingresos{

    constructor(){
        this.ingresos =[];
    }
    

    agregarIngreso(descripcion,valor){
        let ingreso={
            descripcion,
            valor,
        };

       this.ingresos.push(ingreso);
       console.log(this.ingresos)
        return {...ingreso}

    }
}