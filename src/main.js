import './style.css';
import { initEjercicio1 } from './js/js_ejercicio_1.js';
import { initEjercicio2 } from './js/js_ejercicio_2.js';
import { initEjercicio3 } from './js/js_ejercicio_3.js';
import { initEjercicio4 } from './js/js_ejercicio_4.js';
import { initEjercicio5 } from './js/js_ejercicio_5.js';
import { initEjercicio6 } from './js/js_ejercicio_6.js';
import { initEjercicio7 } from './js/js_ejercicio_7.js';
import { initEjercicio8 } from './js/js_ejercicio_8.js';
import { initEjercicio9 } from './js/js_ejercicio_9.js';

document.addEventListener('DOMContentLoaded', () => {
    const safeRun = (fn) => {
        try {
            if (typeof fn === 'function') fn();
        } catch (e) {
            console.error("Error:", e);
        }
    };

    safeRun(initEjercicio1);
    safeRun(initEjercicio2);
    safeRun(initEjercicio3);
    safeRun(initEjercicio4);
    safeRun(initEjercicio5);
    safeRun(initEjercicio6);
    safeRun(initEjercicio7);
    safeRun(initEjercicio8);
    safeRun(initEjercicio9);
});