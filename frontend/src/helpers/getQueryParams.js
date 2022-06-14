export function getObjectParam() {
  const urlParams = new URLSearchParams(window.location.search.substring(1));
  const entries = urlParams.entries(); //devuelve un iterador de tuplas [clave, valor] decodificadas
  const objectQueryParams = Object.fromEntries(entries);
  return objectQueryParams;
}
