export function contarvocalesconsonantes(cadena){
    let cadena2=cadena.toLowerCase();
    let vector=cadena2.split("");
    let vocales=0;
    let consonantes=0;
    for (let i = 0; i < vector.length; i++) {
        if(vector[i]=="a"||vector[i]=="e"||vector[i]=="i"||vector[i]=="o"||vector[i]=="u"){
            ++vocales;
        }else{
            if(vector[i]=="b"||vector[i]=="c"||vector[i]=="d"||vector[i]=="f"||vector[i]=="g"||vector[i]=="h"||vector[i]=="j"||vector[i]=="k"||vector[i]=="l"||vector[i]=="m"||vector[i]=="n"||vector[i]=="ñ"||vector[i]=="p"||vector[i]=="q"||vector[i]=="r"||vector[i]=="s"||vector[i]=="t"||vector[i]=="v"||vector[i]=="w"||vector[i]=="x"|| vector[i]=="y"||vector[i]=="z"){
            ++consonantes;
            }
        }
    }
    return(`En la cadena "${cadena}" existen ${vocales} vocales y ${consonantes} consonantes`);
}