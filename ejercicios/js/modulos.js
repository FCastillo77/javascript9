import { calcularletras } from "./ejercicio1.js";
import { palabrarecortada } from "./ejercicio2.js";
import { separar } from "./ejercicio3.js";
import { repetircad } from "./ejercicio4.js";
import { invertircadena } from "./ejercicio5.js";
import { encontrarstring } from "./ejercicio6.js";
import { palindromo } from "./ejercicio7.js";
import { quitarcadenas } from "./ejercicio8.js";
import { numerosaleatorios } from "./ejercicio9.js";
import { numerocapicua } from "./ejercicio10.js";
import { factorial } from "./ejercicio11.js";
import { numeroprimo } from "./ejercicio12.js";
import { parimpar } from "./ejercicio13.js";
import { celciosaf } from "./ejercicio14.js";
import{binariodecimalyvic} from "./ejercicio15.js";
import{cantidaddescuento} from "./ejercicio16.js";
import{difanios} from "./ejercicio17.js";
import{contarvocalesconsonantes} from "./ejercicio18.js";
import{validarNombre} from "./ejercicio19.js";
import{validarCorreo} from "./ejercicio20.js";
import{potencia2} from "./ejercicio21.js";
import{numaltobajo} from "./ejercicio22.js";
import{vectorparimpar} from "./ejercicio23.js";
import{ascdescarr} from "./ejercicio24.js";
import {devolverCuadrados} from "./vectoresconvalidaciones.js";
import {arraynorep} from "./ejercicio25.js";
import{promedioVector} from "./ejercicio26.js";
import {Pelicula} from "./ejercicio27.js";

console.log("Ejercicio 1");
console.log(calcularletras("arbol"));
console.log("Ejercicio 2");
console.log(palabrarecortada("Hola mundo", 7));
console.log("Ejercicio 3");
console.log(separar("Hola que-tal", "-"));
console.log("Ejercicio 4");
repetircad("hola  mundo", 2);
console.clear();
console.log("Ejercicio 5");
console.log(invertircadena("arbol"));
console.log("Ejercicio 6");
console.log(encontrarstring("hola mundo adios mundo", "mundo"));
console.log("Ejercicio 7");
console.log(palindromo("uwu"));
console.log("Ejercicio 8");
console.log(quitarcadenas("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));
console.log("Ejercicio 9");
console.log(numerosaleatorios(501, 600));
console.log("Ejercicio 10");
console.log(numerocapicua(2002));
console.log("Ejercicio 11");
console.log(factorial(5));
console.clear();
console.log("Ejercicio 12");
console.log(numeroprimo(7));
console.log("Ejercicio 13");
console.log(parimpar(8));
console.log("Ejercicio 14");
console.log(celciosaf(3));
console.clear();
console.log("Ejercicio 15");
console.log("convertir de binario a decimal y viceversa");
//ingresar el numero y la base para que se transforme en la base opuesta
console.log(binariodecimalyvic(10,2));
console.log("Ejercicio 16");
//ingrese dos numeros el precio y el descuento pe 1000 pesos 20% de descuento
console.log(cantidaddescuento(1000,20));
console.log("Ejercicio 17");
//Ingresar la fecha tomando en cuenta que se debe ingresar anio mes y dia y los meses inician desde 0=enero
let a=new Date(1984,4,23);
console.log(difanios(a));
console.clear();
console.log("Ejercicio 18");
console.log(contarvocalesconsonantes("Hola Mundo"));
console.log("Ejercicio 19");
validarNombre("Felix Castillo");
console.log("Ejercicio 20");
validarCorreo("felix@gmail.com");
console.clear();
console.log("Ejercicio 21");
let vector=new Array (1,4,5);
console.log(potencia2(vector));
console.log("Ejercicio 22");
let vector3= new Array(1, 4, 5, 99, -60);
numaltobajo(vector3);
console.log("Ejercicio 23");
let vector5=new Array(1,2,3,4,5,6,7,8,9,0);
vectorparimpar(vector5);
console.clear();
console.log("Ejercicio 24");
let vector6=new Array(7,5,7,8,6);
ascdescarr(vector6);
//console.log(devolverCuadrados(vector6));
console.log("Ejercicio 25");
let vector7=new Array("x", 10, "x", 2, "10", 10, true, true);
console.log(arraynorep(vector7));
console.log("Ejercicio 26");
let vector8=new Array(9,8,7,6,5,4,3,2,1,0);
console.log(promedioVector(vector8));
console.clear();
console.log("Ejercicio 27");

//Pelicula.generosAceptados();
/*
const peli=new Pelicula ({
    id:"tt1234567",
    titulo:"rocky balboa",
    director:"Director de rocky",
    estreno:2022,
    pais:["asda","qdwdq"],
    generos:["Comedy","Sport"],
    calificacion:7.789
});
peli.fichaTecnica();
*/
const misPelis=[
    {
    id:"tt0758758",
    titulo:"Into the Wild",
    director:"Sean Penn",
    estreno:2007,
    pais:["USA"],
    generos:["Adventure","Biography","Drama"],
    calificacion:8.1
    },
    {
    id:"tt0479143",
    titulo:"Rocky Balboa",
    director:"Sylvester Stallone",
    estreno:2006,
    pais:["USA"],
    generos:["Action","Drama","Sport"],
    calificacion:7.1
    },
    {
    id:"tt0468569",
    titulo:"The Dark knight",
    director:"Christopher Nolan",
    estreno:2008,
    pais:["USA","UK"],
    generos:["Action","Crime","Drama"],
    calificacion:9.0
    }
];

misPelis.forEach(el=>new Pelicula(el).fichaTecnica());
