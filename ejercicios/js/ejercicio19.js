export const validarNombre=(nombre="")=>{
    if(!nombre)return console.warn("no ingresaste ninguna valor");
    if(typeof nombre!=="string") return console.warn("no ingresaste ninguna cadena");
    let expReg=/^[A-Za-z\s]+$/g.test(nombre);
    return (expReg)
    ?console.info("es un nombre validoo")
    :console.warn("no es un nombre valido");
}