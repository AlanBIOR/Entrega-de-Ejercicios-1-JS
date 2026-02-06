// src/js/js_ejercicio_1.js
export function initEjercicio1() {
  const boton = document.querySelector('.button-color');
  const cuerpo = document.body;

  if (!boton) return; // Esta es la "protección" que usabas antes

  const generarColorRGB = () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
  };

  boton.addEventListener('click', () => {
      const nuevoColor = generarColorRGB();
      cuerpo.style.backgroundColor = nuevoColor;
  });
}