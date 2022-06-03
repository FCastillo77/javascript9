export function quitarcadenas(cadenacompleta,cadena){
// arbol de este arbol del bosque de arbol
let aux=cadenacompleta.replace(cadena,"");
    for (let i = 0; i < cadenacompleta.length; i++) {
      aux=  aux.replace(cadena,"");
    }

return aux;
}
