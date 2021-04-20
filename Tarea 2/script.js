var form = document.getElementById("form");

var submit = document.getElementById("submit"); 
var iteradorFila = 1;

// submit.addEventListener("click", mostrarInfo());

function mostrarInfo() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var edad = document.getElementById("edad").value;

    if (nombre === "" || nombre == null) {
        alert("El campo nombre es requerido.");
        return;        
      } else if (apellido === "" || apellido == null) {
        alert("El campo apellido es requerido.");
        return;
      } else if (edad === "" || edad == null) {
        alert("El campo edad es requerido.");
        return;
      }

  var tabla = document.getElementById("tabla");

  var nuevaFila = tabla.insertRow(iteradorFila);
  var celda1 = nuevaFila.insertCell(0);
  var celda2 = nuevaFila.insertCell(1)
  var celda3 = nuevaFila.insertCell(2)
  celda1.innerHTML = nombre;
  celda2.innerHTML = apellido;
  celda3.innerHTML = edad;
  iteradorFila++;
  form.reset();
  
  if(tabla.style.display=="none"){
    tabla.style.display = "block"
  }

}
