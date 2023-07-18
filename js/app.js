import Ingresos from '/js/ingresos.js';
import Agregar from '/js/agregar.js';
import Egresos from '/js/egresos.js';

document.addEventListener('DOMContentLoaded',function () {

        const agregar = new Agregar();
        const ingresos= new Ingresos();
        const egresos = new Egresos();
        
        agregar.setIngresos(ingresos);
        agregar.setEgresos(egresos);
        
        const btnAgregar=document.getElementById('btnAgregar');
        const AgregarDescipcion= document.getElementById('AgregarDescipcion'); 
        const Agregarvalor= document.getElementById('Agregarvalor');
        const IngresosPrincipal= document.getElementById('ingresoPrincipal');


        
      
       btnAgregar.onclick= () => {
       // const cambiarValor=parseFloat(Agregarvalor.value);
        //const ingreso= ingresos.agregarIngreso(AgregarDescipcion.value,cambiarValor);
        //agregar.crearFila(ingreso);
       // IngresosPrincipal.innerHTML=ingresos.sumar();

       const cambiarValor=parseFloat(Agregarvalor.value);
       const egreso= egresos.agregarEgreso(AgregarDescipcion.value,cambiarValor);
       agregar.crearFilaEgreso(egreso);

       }

       





                
        

     

       

       
      
});