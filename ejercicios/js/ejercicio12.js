export function numeroprimo(numero){
    let count=0;
    let aux=numero;
    
for (let i = 1; i <= numero; i++) {
    
    if((aux%i)==0){
        count=count+1;
    }
    
}
if(count==2){
 return true;       
}else{
    return false;
}


}