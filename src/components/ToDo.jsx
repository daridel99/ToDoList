import { useState } from 'react';

import PropTypes from 'prop-types';

export const ToDoApp = ({titulo_1, parrafo_1}) => {

	  const [counter, setCounter] = useState(0);

    /*
    const handleSubstract = () => setCounter( counter - 1 );
    const handleReset = () => setCounter( parrafo_1 );
    */
	  const handleNumber = () => setCounter( counter + 1 );

  return (
    <>
    <div class="titulo">
    <h1 ><img class="img-spider" src="./public/spidey.webp" width="5%"/> {titulo_1} </h1>
    </div>
    <p>Tareas activas { counter }</p>

     <form class="creacion">
			<div className="todo-list">
				<div className="file-input">
        <h3 class="subTitulo">Tarea</h3>
					<input
						type="text"
            class="tarea"
					/>
          <h3 class="subTitulo">Fecha</h3>
          <input
						type="date"
            class="fecha"
					/>
          <h3 class="subTitulo">Descripción</h3>
          <input
						type="text"
            class="descripcion"
					/>
				</div>
			</div>
    </form> 

    <button
						class="button"
            onClick={ handleNumber }
					>
						<h3>Crear Tarea</h3>
					</button>

    </>
  );
};


ToDoApp.propTypes = {
    titulo_1: PropTypes.string.isRequired,
    parrafo_1: PropTypes.number.isRequired
}

