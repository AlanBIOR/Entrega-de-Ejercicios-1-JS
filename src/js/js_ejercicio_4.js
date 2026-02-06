export function initEjercicio4() {
  const form = document.querySelector('.form')
  const inputText = document.querySelector('#text') 
  const lista = document.querySelector('.list-element')

  // 1. Verificamos que los elementos existan
  if (inputText && lista) {
    
    // 2. Usamos el evento 'input' para detectar cambios al escribir
    inputText.addEventListener('input', () => {
      // Convertimos lo que el usuario escribe a minúsculas para que sea más fácil comparar
      const filtro = inputText.value.toLowerCase();
      
      // 3. Obtenemos TODOS los elementos de la lista actual
      const items = lista.querySelectorAll('li');

      // Recorremos usando un índice (i)
      for (let i = 0; i < items.length; i++) {
          const item = items[i]; // Accedemos al elemento en la posición i
          const textoItem = item.textContent.toLowerCase();

          if (textoItem.includes(filtro)) {
              item.style.display = '';
          } else {
              item.style.display = 'none';
          }
      }
    });
  }
}
