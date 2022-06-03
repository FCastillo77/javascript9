export function ascdescarr(vector){
    let aux= new Array;
    aux=vector;
 let objeto={
    vector,
    asc:vector.map(elemento=>elemento).sort(),
    desc:vector.map(elemento=>elemento).sort().reverse(),
 };
console.log (objeto);
}