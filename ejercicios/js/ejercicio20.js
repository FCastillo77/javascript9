export const validarCorreo=(correo="")=>{
    if(!correo)return console.warn("no ingresaste ningun valor");
    if(typeof correo!=="string") return console.warn("no ingresaste ninguna cadena");
    let expReg=/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z]{2,15})/i.test(correo);
    return (expReg)
    ?console.info("es un correo valido")
    :console.warn("no es un correo valido");
}