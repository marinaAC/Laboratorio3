// Tipos
let batman: string = "Bruce";
let superman:string = "Clark";

let existe:boolean = false;

// Tuplas
let parejaHeroes:[string,string] = [batman,superman];
let villano:[string,number,boolean] = ["Lex Lutor",5,true];

// Arreglos
let aliados:string[] = ["Mujer Maravilla","Acuaman","San", "Flash"];

//Enumeraciones
let fuerzaFlash:number = 5;
let fuerzaSuperman:number = 100;
let fuerzaBatman:number = 1;
let fuerzaAcuaman:number = 0;

// Retorno de funciones
function activar_batiseñal():string{
  return "activada";
}

function pedir_ayuda():void{
  console.log("Auxilio!!!");
}

// Aserciones de Tipo
let poder: any= "100";
let largoDelPoder:number = poder.length;
console.log( largoDelPoder );
