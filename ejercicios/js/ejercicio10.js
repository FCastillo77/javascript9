export function numerocapicua(numero){
    let aux=(numero).toString();
    aux=aux.split("").reverse().join("");
    if(aux==numero){
        return true;
    }else{
        return false;
    }
}