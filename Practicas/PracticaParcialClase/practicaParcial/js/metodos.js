/**
 * Varibles globales
 */
var httpRequest = new XMLHttpRequest();

//window.onload=CargarTabla;

var callBack = function () {
    loadingWait();
    if (httpRequest.readyState == 4) {
        console.log("responde");
        if (httpRequest.status == 200) {
            loadingFinish();
            console.log("Ingreso");
            var requestServer = JSON.parse(httpRequest.responseText);
            console.log("Respuesta del servidor -->", requestServer);
            if (requestServer.autenticado == "si") {
                window.location.replace("index.html");

            }else if(requestServer.date != undefined)
            {
                validarLocalStorage(requestServer,"posteos")
            }

        } else {
            alert("Algo fallo");
        }

    }
}


function metodoPost(obj, func) {
    httpRequest.onreadystatechange = callBack;
    httpRequest.open("POST", "http://localhost:1337/" + func, true);
    httpRequest.setRequestHeader("Content-Type", "application/json");
    console.log("params-->", obj);
    httpRequest.send(JSON.stringify(obj));
}

function logPerson() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var json = { "email": email, "password": pass };
    metodoPost(json, "login");
    validarLocalStorage(json, "usuarios");
}


function addPost(){
    var titulo = document.getElementById("titPost").value;
    var header = document.getElementById("txtheader").value;
    var post = document.getElementById("posttext").value;
    var person = ultimoLog();
    var json = {"title":titulo,"header":header,"posttext":post,"author":person};
    metodoPost(json,"postearNuevaEntrada");
}

function validarLocalStorage(infoLocal,tipo) {
    var retorno = true;
    var lista = JSON.parse(localStorage.getItem(tipo));
    if (lista == null) {
        var personas = [];
        personas.push(infoLocal);
        localStorage.setItem(tipo, JSON.stringify(personas));
        retorno = false;
    } else {
        console.log("lista----", lista);
        lista.push(infoLocal);
        localStorage.setItem(tipo, JSON.stringify(lista));
    }
    return retorno;
}



function ultimoLog(){
    var lista = JSON.parse(localStorage.getItem("usuarios"));
    var indice = lista.length-1;
    return lista[indice].email;
}

function loadingWait() {
    document.getElementById("load").hidden = false;
    document.getElementById("form").hidden = true;
}

function loadingFinish() {
    document.getElementById("load").hidden = true;
    document.getElementById("form").hidden = false;
}
