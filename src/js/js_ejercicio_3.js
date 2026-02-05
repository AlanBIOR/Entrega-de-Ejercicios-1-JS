// 1. Seleccionamos los elementos principales
const formulario = document.querySelector('#miFormulario');
const input = document.querySelector('#tareaInput');
const lista = document.querySelector('.list-element');

if (formulario && input && lista) {
  // 2. Escuchamos el envío del formulario
  formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita que la página se recargue

    const texto = input.value.trim(); // Obtenemos el texto sin espacios vacíos

    if (texto !== "") {
      // 3. CREAR ELEMENTOS
      const nuevoItem = document.createElement('li');
      const botonEliminar = document.createElement('button');

      // 4. CONFIGURAR ELEMENTOS
      // Usamos textContent para el texto que escribió el usuario
      nuevoItem.textContent = texto; 
      botonEliminar.textContent = 'Eliminar';
      botonEliminar.style.marginLeft = '10px';

      // 5. LÓGICA PARA ELIMINAR
      botonEliminar.addEventListener('click', () => {
        nuevoItem.remove(); // Borra el <li> completo
      });

      // 6. ENSAMBLAR Y MOSTRAR
      nuevoItem.appendChild(botonEliminar); // Metemos el botón dentro del li
      lista.appendChild(nuevoItem); // Metemos el li dentro de la ul

      // 7. LIMPIAR EL INPUT
      input.value = '';
      input.focus(); // Ponemos el cursor listo para escribir otra vez
    }
  });
}