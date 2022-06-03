export const devolverCuadrados=(arr=undefined)=>{
    if(arr===undefined)return console.warn("No ingresaste un arreglo de numeros");
    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
    if(arr.length===0)return console.error("El arreglo esta vacio");
    for(let num of arr){
        if(typeof num !=="number") return console.error(`El valor ${num} ingresado, NO es un numero`);
    }
    const newArr= arr.map(el=>(el*el));
    return console.info(`Arreglo original ${arr}\nArreglo elevado al cuadrado; ${newArr}`);
}