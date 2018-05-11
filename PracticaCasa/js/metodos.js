var httpRequest = new XMLHttpRequest();
if(window.location.href == "file:///C:/Users/Administrador/Documents/UTN/Laboratorio3/PracticaCasa/index.html"){
    window.onload = BuscarPersonasServ;
}


var callBack = function() {
  //  loadingWait();
    if (httpRequest.readyState == 4) {
        if (httpRequest.status == 200) {
     //   loadingFinish();
        console.log("entro");
        var rta = JSON.parse(httpRequest.responseText);
        if (rta.autenticado == "si") {
            window.location.replace("index.html");
            }else{
                console.log("Respuesta servidor ->", rta);
               // loadTablaAndnAV();
                var aux = setLocalStorage(JSON.stringify(rta), "personas");
                setTablePerson();
            }
        }
    }
};

function BuscarPersonasServ() {
  httpRequest.onreadystatechange = callBack;
  httpRequest.open("GET", "http://localhost:1337/personas", true);
  httpRequest.send();
}

function metodoGet(url, tipo) {
  httpRequest.onreadystatechange = callBack;
  httpRequest.open("GET", url, tipo);
  httpRequest.send();
}

function metodoPost(objJson, func, tipo) {
  httpRequest.onreadystatechange = callBack;
  httpRequest.open("POST", "http://localhost:1337/" + func, tipo);
  httpRequest.setRequestHeader("Content-Type", "application/json");
  httpRequest.send(JSON.stringify(objJson));
}

function setLocalStorage(respuestaServ, tipo) {
  retorno = false;
  var getItemsLocal = JSON.parse(localStorage.getItem(tipo));
  if (getItemsLocal == null) {
    localStorage.setItem(tipo, respuestaServ);
    retorno = true;
  }
  return retorno;
}

function addObjLocalStorage(obj, tipo) {
  var retorno = false;
  var listaGuardada = JSON.parse(localStorage.getItem(tipo));
  if (listaGuardada == null) {
    var lista = [];
    lista.push(obj);
    localStorage.setItem(tipo, JSON.stringify(lista));
    retorno = true;
  } else {
    listaGuardada.push(obj);
    localStorage.setItem(tipo, JSON.stringify(listaGuardada));
    retorno = true;
  }
  return retorno;
}

function setTablePerson() {
  var listaPersonas = [];
  listaPersonas = JSON.parse(localStorage.getItem("personas"));
  tabla = document.getElementById("tabla-cuerpo");

  listaPersonas.forEach(element => {
    var index = listaPersonas.indexOf(element);
    var columnas =
      "<td>" +
      element.nombre +
      "</td><td>" +
      element.apellido +
      "</td><td>" +
      element.fecha +
      "</td><td>" +
      element.telefono +
      "</td><td><a href='index.html' onclick='deletePerson(" +
      index +
      ")'>Eliminar</td>";
    tabla.innerHTML += "<tr>" + columnas + "</tr>";
  });
}

function deletePerson(index) {
  console.log(index);
  var element = JSON.parse(localStorage.getItem("personas"));
  console.log(element);
  console.log("el largo del array ->", element.length);
  for (var i = 0; i < element.length; i++) {
    if (i == index) {
      element.splice(index, 1);
      localStorage.setItem("personas", JSON.stringify(element));
      setTablePerson();
      break;
    }
  }
}

function addPerson() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var fecha = document.getElementById("fecha").value;
  var telefono = document.getElementById("telefono").value;
  var ojson = {
    nombre: nombre,
    apellido: apellido,
    fecha: fecha,
    telefono: telefono
  };
  metodoPost(JSON.stringify(ojson));
  addObjLocalStorage(JSON.stringify(ojson), "personas");
  setTablePerson();
}

function updatePerson() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var element = JSON.parse(localStorage.getItem("personas"));

     element.forEach(element => {
      if(element.nombre == nombre && element.apellido == apellido){
        var fecha = document.getElementById("fecha").value;
        var telefono = document.getElementById("telefono").value;
        element.fecha = fecha;
        element.telefono = telefono;
        localStorage.setItem("personas", JSON.stringify(element));
        setTablePerson();
        break;
      }
    });
}


function logPerson() {
    var email = document.getElementById("usuario").value;
    var pass = document.getElementById("pass").value;
    var json = { "email": email, "password": pass };
    metodoPost(json, "login");
    addObjLocalStorage(json, "usuarios");
}

function loadingWait() {
    document.getElementById("load").hidden = false;
    document.getElementById("form").hidden = true;
}

function loadingFinish() {
    document.getElementById("load").hidden = true;
    document.getElementById("form").hidden = false;
}

/*
function loadTablaAndnAV(){
    document.getElementById("form-tabla").hidden = false;
    document.getElementById("nav").hidden = false;
    document.getElementById("form").hidden = true;
}
*/

function ultimoLog(){
    var lista = JSON.parse(localStorage.getItem("usuarios"));
    var indice = lista.length-1;
    return lista[indice].email;
}
