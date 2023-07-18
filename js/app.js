import Ingresos from "/js/ingresos.js";
import Agregar from "/js/agregar.js";
import Egresos from "/js/egresos.js";

document.addEventListener("DOMContentLoaded", function () {
  const agregar = new Agregar();
  const ingresos = new Ingresos();
  const egresos = new Egresos();

  agregar.setIngresos(ingresos);
  agregar.setEgresos(egresos);

  const btnAgregar = document.getElementById("btnAgregar");
  const AgregarDescipcion = document.getElementById("AgregarDescipcion");
  const Agregarvalor = document.getElementById("Agregarvalor");
  const IngresosPrincipal = document.getElementById("ingresoPrincipal");
  const EgresosPrincipal = document.getElementById("EgresoPrincipal");
  const selectElement = document.getElementById("tipo");
  const presupuesto=document.getElementById("presupuesto");

  btnAgregar.onclick = () => {
    const cambiarValor = parseFloat(Agregarvalor.value);

    // Obtener el valor seleccionado del select
    const selectedValue = selectElement.value;

    if (selectedValue === "ingreso") {
      const ingreso = ingresos.agregarIngreso(
        AgregarDescipcion.value,
        cambiarValor
      );
      agregar.crearFilaIngreso(ingreso);
      IngresosPrincipal.innerHTML = ingresos.sumar();
      presupuesto.innerHTML=agregar.RestarIngresosEgresos();

    } else if (selectedValue === "egreso") {
      const cambiarValor = parseFloat(Agregarvalor.value);
      const egreso = egresos.agregarEgreso(
        AgregarDescipcion.value,
        cambiarValor
      );
      agregar.crearFilaEgreso(egreso);
      EgresosPrincipal.innerHTML = egresos.sumar();
      presupuesto.innerHTML=agregar.RestarIngresosEgresos();
      
    } else {
      console.log("Valor desconocido");
    }
  };
});
