export function promedioVector(vector){
    let prom=new Number;
    for (let i = 0; i < vector.length; i++) {
        prom= prom+vector[i];
    }
        
    
    prom=(prom/(vector.length));
    return prom
}