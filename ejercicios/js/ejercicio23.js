export function vectorparimpar(vector){
let vectora= new Array;
let vectorb= new Array;
let a=0,b=0;


    for (let i = 0; i < vector.length; i++) {
    if(vector[i]%2==0){
        vectora[a]=vector[i];
        ++a;
    }else{
        vectorb[b]=vector[i];
        ++b;
    }
    
    }
    return(console.log(`Pares:${vectora}, impares: ${vectorb}`));
    
}