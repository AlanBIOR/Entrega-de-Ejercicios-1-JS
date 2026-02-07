export function initEjercicio9() {
    const inputTarea = document.querySelector('#nueva-tarea');
    const btnAgregar = document.querySelector('#btn-agregar');
    const listTareas = document.querySelector('#lista-tareas');
    const btnLimpiar = document.querySelector('#btn-limpiar');
    const btnSeleccionarTodo = document.querySelector('#btn-seleccionar-todo');
    
    // 1. Cargar tareas desde LocalStorage al iniciar (el "boot" del sistema)
    let tareas = JSON.parse(localStorage.getItem('tareas')) || [];

    const guardarEnStorage = () => {
        localStorage.setItem('tareas', JSON.stringify(tareas));
        renderizarTareas();
    };

    const renderizarTareas = () => {
        listTareas.innerHTML = ''; // Limpiamos la "pantalla" antes de redibujar
        tareas.forEach((t, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <input type="checkbox" ${t.completada ? 'checked' : ''} data-index="${index}">
                <span style="${t.completada ? 'text-decoration: line-through; color: #888;' : ''}">${t.texto}</span>
            `;
            listTareas.appendChild(li);
        });
    };

    if (btnAgregar && inputTarea) {
        // Evento para agregar tarea
        btnAgregar.addEventListener('click', () => {
            const texto = inputTarea.value.trim();
            if (texto !== "") {
                tareas.push({ texto: texto, completada: false });
                inputTarea.value = ''; // Reset del input
                guardarEnStorage();
            }
        });

        // Permitir agregar tarea presionando "Enter"
        inputTarea.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                btnAgregar.click();
            }
        });

        // 2. Evento para marcar como completada (Delegación de eventos)
        listTareas.addEventListener('change', (e) => {
            if (e.target.type === 'checkbox') {
                const index = e.target.dataset.index;
                tareas[index].completada = e.target.checked;
                guardarEnStorage();
            }
        });

        // 3. Seleccionar todas las tareas
        if (btnSeleccionarTodo) {
            btnSeleccionarTodo.addEventListener('click', () => {
                tareas.forEach(t => t.completada = true);
                guardarEnStorage();
            });
        }

        // 4. Limpiar completadas (Filtro)
        if (btnLimpiar) {
            btnLimpiar.addEventListener('click', () => {
                tareas = tareas.filter(t => !t.completada);
                guardarEnStorage();
            });
        }

        // Render inicial al cargar la página
        renderizarTareas();
    }
}