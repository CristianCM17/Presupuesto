export default class ingresos{

    constructor(){
        this.agregar = null;
        this.ingresos =[];
        this.id=1;
    }

    setAgregar(agregar){
        this.agregar =agregar;
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
}