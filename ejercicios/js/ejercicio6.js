export function encontrarstring(cadenacompleta,cadena){
    let contador=0;
    let posicion=0;
    
    while((posicion=cadenacompleta.indexOf(cadena,posicion))!==-1){
        ++contador;
        posicion+=cadena.length;
    }
    return contador;
}
