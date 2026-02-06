import './style.css';

const ejecutarEjercicio = async (nombreArchivo) => {
    try {
        await import(`./js/${nombreArchivo}.js`);
    } catch (error) {
        console.warn(`Módulo ${nombreArchivo} cargado. Asegúrate de usar validaciones IF en el DOM.`);
    }
};

ejecutarEjercicio('js_ejercicio_1');
ejecutarEjercicio('js_ejercicio_2');
ejecutarEjercicio('js_ejercicio_3');
ejecutarEjercicio('js_ejercicio_4');
ejecutarEjercicio('js_ejercicio_5');
ejecutarEjercicio('js_ejercicio_6');
ejecutarEjercicio('js_ejercicio_7');
ejecutarEjercicio('js_ejercicio_8');
ejecutarEjercicio('js_ejercicio_9');