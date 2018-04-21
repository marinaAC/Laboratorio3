

var saludo = "Holis";
alert(saludo);
var listaNum = [];


function Sumar(){
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var resultado = num1 + num2;
    document.getElementById("inResultado").value = resultado;
    alert("El resultado es "+resultado);
    return resultado;
}

function GuardarHistotial(){
    //innerHtml voy agregarle html, recibe un string html, el contenido dentro delos tags
    var result = Sumar();
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var ancla = document.getElementById("ancla");
    ancla.innerHTML+="<tr><td>"+num1+"</td><td>"+num2+"</td><td>"+result+"</td><tr>";


    // //Ejemplo del profesor
    // var fila = "<tr><td>"+num1+"</td><td>"+num2+"</td><td>"+result+"</td><tr>";
    // var cuerpo= document.getElementById("ancla");
    // var cuerpoViejo = cuerpo.innerHTML;
    // cuerpo = cuerpoViejo+fila;
}