var httpRequest = new XMLHttpRequest();
window.onload = BuscarNotas;
var constanteAux = null;

var callBack = function() {
  loadingWait();
    if (httpRequest.readyState == 4) {
        if (httpRequest.status == 200) {
        loadingFinish();
        console.log("entro");
        
        var rta = JSON.parse(httpRequest.responseText);
        console.log("respuesta ", rta);
        if (rta.type == "ok") {
          closePopUp;

            }else{
                console.log("Respuesta servidor ->", rta);
               // loadTablaAndnAV();
                var aux = setLocalStorage(JSON.stringify(rta), "notas");
                setTablePerson();
            }
        }
    }
};

function BuscarNotas() {
  httpRequest.onreadystatechange = callBack;
  httpRequest.open("GET", "http://localhost:3000/notas", true);
  httpRequest.send();
}

function metodoGet(url, tipo) {
  httpRequest.onreadystatechange = callBack;
  httpRequest.open("GET", url, tipo);
  httpRequest.send();
}

function metodoPost(objJson, func, tipo) {
  httpRequest.onreadystatechange = callBack;
  httpRequest.open("POST", "http://localhost:3000/" + func, tipo);
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
  listaPersonas = JSON.parse(localStorage.getItem("notas"));
  tabla = document.getElementById("tabla-cuerpo");
  var uss = ultimoLog();
  listaPersonas.forEach(element => {
    var columnas =    "<td>" +    element.legajo +    "</td><td>" +    element.nombre +
    "</td><td>" +    element.materia +    "</td><td>" +    element.nota +    "</td><td>";
    if(uss.type == "Admin")
    {
      columnas +="<a href='#' onclick='showPopup(" +element.id +")'>Editar</td>";
    }else{
      columnas +="sin acciones</td>";
    }
    if(element.nota<4){
      tabla.innerHTML += "<tr style='color:red'>" + columnas + "</tr>";
    }else{
      tabla.innerHTML += "<tr>" + columnas + "</tr>";
    }
    
  });
}

function loadingWait() {
  document.getElementById("load").hidden = false;
  document.getElementById("tabla").hidden = true;
}

function loadingFinish() {
  document.getElementById("load").hidden = true;
  document.getElementById("tabla").hidden = false;
}


function showPopup(index){
  document.getElementById("form-popup").hidden = false;
  document.getElementById("tabla").hidden = true;
  localStorage.setItem("auxiliar",index);
}

function closePopUp(){
  document.getElementById("form-popup").hidden = true;
  document.getElementById("tabla").hidden = false;
}

function updatePerson() {
    var id = localStorage.getItem("auxiliar");
    var nombre = document.getElementById("nombre").value;
    var legajo = document.getElementById("legajo").value;
    var nota = document.getElementById("nota").value;
    var materia = document.getElementById("materia").value;
    var json = {"id":id,"legajo":legajo,"nombre": nombre,"materia":materia,"nota":nota}
    metodoPost(json,"editarNota",true);
    addObjLocalStorage(json,"notas");
    setTablePerson();
    window.location.replace("index.html");
}


function ultimoLog(){
    var lista = JSON.parse(localStorage.getItem("usuarios"));
    var indice = lista.length-1;
    return lista[indice];
}
