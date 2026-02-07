export function initEjercicio7() {
    const inputLongitud = document.querySelector('.longuitudContra');
    const btnContra = document.querySelector('.btnContra');
    const displayPassword = document.querySelector('.password');
    const errorMsg = document.querySelector('#error-msg');

    if (btnContra && inputLongitud) {
        btnContra.addEventListener('click', () => {
            const longitud = Number(inputLongitud.value);
            
            // Limpiamos mensajes previos
            errorMsg.textContent = '';
            displayPassword.textContent = '';

            // Validación solicitada
            if (!longitud || longitud < 4) {
                errorMsg.textContent = '❌ La longitud debe ser mayor o igual a 4';
                displayPassword.textContent = '----';
                return;
            }

            // Banco de caracteres (Letras, números y especiales)
            const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
            let passwordGenerada = '';

            for (let i = 0; i < longitud; i++) {
                // Seleccionamos un índice al azar del banco de caracteres
                const caracterAzar = Math.floor(Math.random() * caracteres.length);
                passwordGenerada += caracteres.charAt(caracterAzar);
            }

            displayPassword.textContent = passwordGenerada;
        });
    }
}