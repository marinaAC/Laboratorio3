/**
 * Varibles globales
 */
var httpGet = new XMLHttpRequest();
var localGet = localStorage.getItem("personas");
window.onload=CargarTabla;


var callBack = function(){
    if(httpGet.readyState==4){
        if(httpGet.status==200){
            console.log("ingreso");
            var rta = JSON.parse(httpGet.responseText);
            if(rta != undefined && rta.respuesta == 'ok'){
                console.log("Llego al metodo post");
            }else{
                if(validarLocalStorage(localGet)){
                    localStorage.setItem("personas",JSON.stringify(rta));
                }
                ObtenerPersonas(rta);
            }
        }else{
            alert("Hubo un problema")
        }
    }    
}

function validarLocalStorage(lista){
    var retorno = false;
    if(lista == null){
        retorno = true;
    }
    return retorno;
}

function CargarTabla(){
    httpGet.onreadystatechange = callBack;
    httpGet.open("GET","http://localhost:3000/personas",true);
    httpGet.send();
}

function ObtenerPersonas(listaPersonas){
    var tabla = document.getElementById("body-tabla");
    listaPersonas.forEach(function(element) {
        var indexElemente = listaPersonas.indexOf(element);
        var columnas = "<td>"+element.nombre+
        "</td><td>"+element.apellido+
        "</td><td>"+element.fecha+
        "</td><td>"+element.telefono+
        "</td><td><button onclick='deletePerson("+indexElemente+")'>Eliminar</button></td>"
        tabla.innerHTML+="<tr>"+columnas+"</tr>";
    }, this);
}

function metodoPost(obj){
    httpGet.onreadystatechange = callBack;
    httpGet.open("POST","http://localhost:3000/nuevaPersona",true);
    httpGet.setRequestHeader("Content-Type", "application/json");
    httpGet.send(JSON.stringify(obj));
}

function addPerson(){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var telefono = document.getElementById("telefono").value;
    var date = document.getElementById("fecha").value;
    var jsonObj = {"nombre":nombre,"apellido":apellido,"fecha":fecha,"telefono":telefono};
    metodoPost(jsonObj);
}


function deletePerson(index){
    
    for (var i = 0; i < localGet.length; i++) {
        if(i==index){
            console.log("ver el index", element);
            var element = localGet[index];
            localGet.splice(index,element);
            localStorage.setItem("personas",localGet);
            break;
        }
    }
}