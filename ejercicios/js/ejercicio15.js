export function binariodecimalyvic(numero,base){

if(base==2)
{ 
    let cadena = String(numero);
let vector = new Array();
let sum = 0;
vector = cadena.split("").reverse();
for (let i = 0; i < vector.length; i++) {
  if (vector[i] != 0) {
    sum += Math.pow(2, i);
  }
}
return(`El numero ${numero} base binario transformado en decimal es ${sum}`);

}else{
    if(base==10){
        let num3=numero;
        let p3=1;
        let sum3=0;
        while (num3!==0){
        sum3=sum3+( (num3%2)*p3);
        p3=p3*10;
        num3=~~(num3/2);
        }
        return(`El numero ${numero} base decimal transformado en binario es ${sum3}.`);
    }else{
        return "error de base";
    }
}



}