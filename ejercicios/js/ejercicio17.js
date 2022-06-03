export function difanios(anio){
let fecha1=anio;
let diferencia=(Date.now()-fecha1.getTime())/1000/(3600*24);
let valor=Math.abs(Math.round(diferencia/365.25));
return `Desde la fecha ${anio.toLocaleDateString()} han pasado ${valor} anios`; 

}