export function initEjercicio8() {
    const textoArea = document.querySelector('#texto');
    const displayCaracter = document.querySelector('.numCaracter');
    const displayPalabras = document.querySelector('.numPalabras');

    if (textoArea && displayCaracter && displayPalabras) {
        textoArea.addEventListener('input', () => {
            const contenido = textoArea.value;

            // 1. Contar caracteres (reemplazamos espacios y saltos de línea por nada)
            const caracteresLimpios = contenido.replace(/\s/g, '').length;
            displayCaracter.textContent = caracteresLimpios;

            // 2. Contar palabras
            // Limpiamos extremos, dividimos por espacios y filtramos huecos vacíos
            const palabrasArray = contenido.trim().split(/\s+/).filter(word => word.length > 0);
            displayPalabras.textContent = palabrasArray.length;
        });
    }
}