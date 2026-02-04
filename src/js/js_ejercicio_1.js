// 1. Seleccionamos los elementos del DOM
const boton = document.querySelector('.button-color');
const cuerpo = document.body;

// 2. Función para generar un color aleatorio en formato hexadecimal
const generarColorRGB = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
};

// 3. Escuchamos el evento de clic
boton.addEventListener('click', () => {
  const nuevoColor = generarColorRGB();
  cuerpo.style.backgroundColor = nuevoColor;
  
  // Imprimimos el valor para verificarlo
  console.log("Color actual:", nuevoColor);
});