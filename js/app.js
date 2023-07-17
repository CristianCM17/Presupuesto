import Ingresos from '/js/ingresos.js';
import Agregar from '/js/agregar.js';

document.addEventListener('DOMContentLoaded',function () {

        const agregar = new Agregar();
        const ingresos= new Ingresos();
        
        agregar.setIngresos(ingresos);
        
        const btnAgregar=document.getElementById('btnAgregar');
        const AgregarDescipcion= document.getElementById('AgregarDescipcion'); 
        const Agregarvalor= document.getElementById('Agregarvalor');
        const IngresosPrincipal= document.getElementById('ingresoPrincipal');

        function sumar() {
                let sumar = ingresos.getIngresos().reduce((acumulador, ingreso) => acumulador + ingreso.valor, 0);
               return sumar;
        }
        
      
       btnAgregar.onclick= () => {
        const cambiarValor=parseFloat(Agregarvalor.value);
        const ingreso= ingresos.agregarIngreso(AgregarDescipcion.value,cambiarValor);
        agregar.crearFila(ingreso);
        IngresosPrincipal.innerHTML=sumar();

       }

       





                
        

     

       

       
      
});