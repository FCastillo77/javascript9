export function separar(cadena, caracter){
    cadena=cadena+caracter;
let vector =new Array;
let cart ="";
let count=0;

    for (let i = 0; i < cadena.length; i++) {
        
        if(cadena.charAt(i)==caracter)
        {
            vector[count]=cart;
            count=count+1;      
            cart="";
            i=i+1;
        }
        cart=cart+cadena.charAt(i);

    }
    return vector;
}