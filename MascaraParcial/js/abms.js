//window.onload = buscarNotas;

function buscarNotas() {
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/notas",
    dataType: "json",
    success: function(response) {
      if (response != null) {
        $("#form-tabla").attr("hidden", false);
        console.log(response);
        localStorage.setItem("notas", JSON.stringify(response));
        setTablePerson();
      }
    }
  });
}

function setTablePerson() {
  var listaPersonas = [];
  listaPersonas = JSON.parse(localStorage.getItem("notas"));
  var uss = ultimoLog();
  listaPersonas.forEach(element => {
    var columnas =
      "<td>" +
      element.legajo +
      "</td><td>" +
      element.nombre +
      "</td><td>" +
      element.materia +
      "</td><td>" +
      element.nota +
      "</td><td>";
    columnas = typeButton(columnas, element, uss);
    tablaLogica(columnas, element);
  });
}

function typeButton(columnas, element, uss) {
  if (uss.type == "Admin") {
    columnas +=
      "<a href='#' onclick='showPopup(" + element.id + ")'>Editar</td>";
  } else {
    columnas += "sin acciones</td>";
  }
  return columnas;
}

/**
 * Logica de coloreados de las filas de una tabla
 */
function tablaLogica(columnas, element) {
  if (element.nota < 4) {
    $("#tabla-cuerpo").append("<tr style='color:red'>" + columnas + "</tr>");
  } else {
    $("#tabla-cuerpo").append("<tr>" + columnas + "</tr>");
  }
}

function ultimoLog() {
  var lista = JSON.parse(localStorage.getItem("historial"));
  var indice = lista.length - 1;
  return lista[indice];
}

function showPopup(id) {
  var notas = JSON.parse(localStorage.getItem("notas"))[id];
  console.log(notas);
  $("#nombre").val(notas.nombre);
  $("#legajo").val(notas.legajo);
  $("#nota").val(notas.nota);
  $("#materia").val(notas.materia);
  $("#id").val(id);
  $("#form-popup").attr("hidden", false);
}

function guardar() {
  var id = $("#id").val();
  var notas = JSON.parse(localStorage.getItem("notas"));
  notas[id].legajo = $("#legajo").val();
  notas[id].nombre = $("#nombre").val();
  notas[id].nota = parseInt($("#nota").val());
  notas[id].materia = $("#materia").val();
  console.log(notas);
  editarPersona(notas[id]);
}

function borrar(id) {
  var id = id;
  var notas = JSON.parse(localStorage.getItem("notas"));
  //probar
  //delete notas[id];
  //console.log(notas);
  for (var i = 0; i < notas.length; i++) {
    if (i == index) {
      notas.splice(index, 1);
      localStorage.setItem("notas", JSON.stringify(notas));
      setTablePerson();
      break;
    }
  }
}

function editarPersona(persona) {
  $.ajax({
    type: "POST",
    url: "http://localhost:3000/editarNota",
    data: persona,
    dataType: "json",
    beforeSend: ocultarForm(),
    success: function(response) {
      console.log(response);
      if (response.type == "error") {
        alert(response.message);
      } else if (response.type == "ok") {
        $("#form-popup").attr("hidden", true);
        $("#load").attr("hidden", true);
        buscarNotas();
      }
    }
  });
}

function ocultarForm() {
  $("#load").attr("hidden", false);
  $("#form-tabla").attr("hidden", true);
  $("#form-popup").attr("hidden", true);
}

$(window).on("load", function() {
  buscarNotas();
});
