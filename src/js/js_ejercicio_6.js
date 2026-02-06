export function initEjercicio6() {
    const minDisplay = document.querySelector('#min');
    const segDisplay = document.querySelector('#seg');
    const microDisplay = document.querySelector('#micro_seg');
    const botones = document.querySelectorAll('.btn-timer');

    // 2. Variables de ESTADO (Fuera, para que no se reinicien solas)
    let minutos = 0, segundos = 0, micro = 0;
    let intervalo = null; // Aquí guardaremos el ID del setInterval

    if (botones.length > 0) {
        botones.forEach(boton => {
            boton.addEventListener('click', () => {
                const accion = boton.id;

                if (accion === 'btnIniciar') {
                    // Solo iniciamos si no hay un intervalo activo
                    if (!intervalo) {
                        intervalo = setInterval(actualizarCronometro, 10); // 10ms para microsegundos
                    }
                } 
                else if (accion === 'btnPausar') {
                    clearInterval(intervalo);
                    intervalo = null; // Liberamos la variable para poder reiniciar después
                } 
                else if (accion === 'btnReiniciar') {
                    clearInterval(intervalo);
                    intervalo = null;
                    // Reset de variables y pantalla
                    minutos = 0; segundos = 0; micro = 0;
                    actualizarPantalla();
                }
            });
        });
    }

    // 4. La "Maquinaria" del tiempo
    function actualizarCronometro() {
        micro++;
        if (micro >= 100) {
            micro = 0;
            segundos++;
        }
        if (segundos >= 60) {
            segundos = 0;
            minutos++;
        }
        actualizarPantalla();
    }

    // 5. Función para pintar en el HTML (con el formato 00:00:00)
    function actualizarPantalla() {
        // Tip: usaremos padStart para que siempre tenga 2 dígitos
        microDisplay.textContent = String(micro).padStart(2, '0');
        segDisplay.textContent = String(segundos).padStart(2, '0');
        minDisplay.textContent = String(minutos).padStart(2, '0');
    }
}