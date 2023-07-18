

export default class egresos{

    constructor(){
        this.egresos =[];
        this.id=1;
    }



    getEgresos(){
        return this.egresos;
    }
    

    agregarEgreso(descripcion,valor){
        let egreso={
            id:this.id++,
            descripcion,
            valor,
        };

       this.egresos.push(egreso);
       console.log(this.egresos)
        return {...egreso}

    }

    borrarFila(id) {
        const index= this.egresos.filter((egreso) => egreso.id===id);
        this.egresos.splice(index,1);

    }

    sumar() {
        let sumar = this.egresos.reduce((acumulador, egreso) => acumulador + egreso.valor, 0);
       return sumar;
  }


}