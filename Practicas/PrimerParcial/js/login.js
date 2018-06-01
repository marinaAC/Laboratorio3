var httpRequest = new XMLHttpRequest();


var callBack = function() {
    loadingWait();
    if (httpRequest.readyState == 4) {
        loadingWait();
        if (httpRequest.status == 200) {
         loadingFinish();
        console.log("entro");
        var rta = JSON.parse(httpRequest.responseText);
        if (rta.type == "User" || rta.type == "Admin") {
            json = parUss();
            var aux = {"type":rta.type,"email":json.email,"password":json.password}
            addObjLocalStorage(aux,"usuarios");
            window.location.replace("index.html");
            }else{
                errorMesage();
            }
        }else{
            loadingFinish();
        }
    }
};


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
  

function parUss(){
    var email = document.getElementById("mail").value;
    var pass = document.getElementById("pass").value;
    var json = { "email": email, "password": pass };
    return json;
}


function logPerson() {
    var json = parUss();
    loadingWait();
    metodoPost(json, "login");
   
}

function loadingWait() {
    document.getElementById("load").hidden = false;
    document.getElementById("form").hidden = true;
}

function loadingFinish() {
    document.getElementById("load").hidden = true;
    document.getElementById("form").hidden = false;
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

  function errorMesage(){
      document.getElementById("mError-us").hidden = false;
      document.getElementById("mError-ps").hidden = false;
      document.getElementById("mail").className = "error";
      document.getElementById("pass").className = "error";
  }
  