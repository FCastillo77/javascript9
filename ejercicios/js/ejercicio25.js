export function arraynorep(vector){
    let nuevovector = vector.filter((item,index)=>{
        return vector.indexOf(item) === index;
      })
      return nuevovector
}