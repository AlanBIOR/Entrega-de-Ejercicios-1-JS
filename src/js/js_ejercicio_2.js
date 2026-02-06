export function initEjercicio2() {
  let contadorClics = 0;

  // 2. Seleccionamos los elementos del DOM
  const botonContador = document.querySelector('.contador');
  const visorPuntos = document.querySelector('.puntos');

  // 3. Verificamos que existan en el HTML actual y añadimos el evento
  if (botonContador && visorPuntos) {
    botonContador.addEventListener('click', () => {
      // Incrementamos el valor
      contadorClics++; // Es lo mismo que: contadorClics = contadorClics + 1;
      
      // Actualizamos el texto en el HTML
      visorPuntos.textContent = contadorClics;
      
      // Opcional: un log para ver el progreso
      console.log(`Llevas ${contadorClics} clics.`);
    });
  }
}