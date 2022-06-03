export function palindromo(cadena) {
  let primercadena = cadena;
  let segundacadena = cadena.split("").reverse().join("");
  let valor = "";

  if (primercadena === segundacadena) {
    valor = "es palindromo";
  } else {
    valor = "no es palindromo";
  }
  return valor;
}
