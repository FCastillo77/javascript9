export function numaltobajo (vector){
    let mayor=vector[0],menor=vector[0];

for (let i = 0; i < vector.length; i++) {
    if(vector[i]>=mayor){
        mayor=vector[i];
        
    }
    if(vector[i]<=menor){
        menor=vector[i];
        
    }
}
console.log(`El numero mayor del array es ${mayor}`);
console.log(`El numero menor del array es ${menor}`);


}