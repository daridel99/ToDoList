//import PropTypes from 'prop-types';
import React, { useState } from 'react';

const CreacionToDoApp = props => {

    const { handleAddItem, elemento} = props; 
    console.log({elemento})
	const [descriptionV, setDescription] = useState("");
    const [tituloV, setTitle] = useState("");
    const [dateV, setDate] = useState(""); 
	const handleSubmit = e => {
		e.preventDefault(); 
                                               
        handleAddItem({

            id: elemento?.id || (+new Date()).toString(),
			done: false,
			dateV,
			description: tituloV +": "+ descriptionV

		});
		setDescription("");
        setTitle("");
	};

    React.useEffect (
        () => {
        if(elemento){
            setDescription(elemento.description.split(":")[1]);
            setTitle(elemento.description.split(":")[0]);
            setDate(elemento.dateV);
        }
        }, [elemento])

  return (
    <>
     <form onSubmit={handleSubmit}>
     <div><h3 className="titulo">Creación ToDo</h3></div>
		<div>
		<div>

        <h3 className="subTitulo">Tarea</h3>
			<input
				type="text"
                className="tarea"
                value={tituloV}
                onChange={e => setTitle(e.target.value)}
			/>

        <h3 className="subTitulo">Fecha</h3>
            <input
				type="date"
                className="fecha"
                value={dateV}
                onChange={e => setDate(e.target.value)}
		/>

        <h3 className="subTitulo">Descripción</h3>
            <input
			type="text"
            className="descripcion"
            value={descriptionV}
            onChange={e => setDescription(e.target.value)}
		/>

        <button
		    className="button"
            disabled={descriptionV && tituloV ? "" : "disabled"}
	    >
		    <h3>Crear Tarea</h3>
	    </button>

			</div>
			</div>
    </form> 



    </>
  );
};


export default CreacionToDoApp;

