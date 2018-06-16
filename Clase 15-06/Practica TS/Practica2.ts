// Funciones Básicas
function sumar( a:number, b:number ):number{
  return a + b;
}

let contar = function( heroes:string[] ):number{
  return heroes.length;
}
let superHeroes:string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
function llamarBatman( llamar?:boolean ):void{
  if( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman();

// Rest?
function unirheroes( ...personas:string[] ):string{
  return personas.join(", ");
}


// Tipo funcion
function noHaceNada( numero:number, texto:string, booleano:boolean, arreglo:any ):void{
}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco;


/* Instalar node js, y luego npm install -g typescript y luego tsc --sourcemap archivo.ts*/