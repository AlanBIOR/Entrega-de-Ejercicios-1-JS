export function initEjercicio5() {
  const num1 = document.querySelector('#num1'); // Usa IDs para ser más preciso
  const num2 = document.querySelector('#num2');
  const botones = document.querySelectorAll('.btn-operacion'); // Selecciona TODOS
  const result = document.querySelector('.resultado');

  if (botones.length > 0 && result) {
    
    // Recorremos cada botón encontrado
    botones.forEach(boton => {
      boton.addEventListener('click', () => {
        
        // 1. Convertimos los valores a números (lo que hablábamos de .value)
        const n1 = parseFloat(num1.value) || 0; 
        const n2 = parseFloat(num2.value) || 0;
        let calculo = 0;

        // 2. Sacamos el ID para saber qué operación hacer
        const operacion = boton.id; 

        // 3. Decidimos la operación según el ID
        if (operacion === 'sumar') {
          calculo = n1 + n2;
        } else if (operacion === 'restar') {
          calculo = n1 - n2;
        } else if (operacion === 'multiplicar') {
          calculo = n1 * n2;
        } else if (operacion === 'dividir') {
          // Validación importante: División por cero
          calculo = n2 !== 0 ? n1 / n2 : 'Error (división por 0)';
        }

        // 4. Mostramos el resultado
        result.textContent = calculo;
      });
    });
  }
}