import React from "react";
import Checkbox from "./Checkbox";

const TablaToDoApp = props => {

	function obtener_localStorage(){

		le

	}


  const { list, setList, onClick } = props;

	const onChangeStatus = e => {
		const { name, checked } = e.target;

		// (E)
		const updateList = list.map(item => ({
			...item,
			done: item.id === name ? checked : item.done
		}));
		setList(updateList);
	};

	// (D)
	const onClickRemoveItem = e => {
		const updateList = list.filter(item => !item.done);
		setList(updateList);
	};

	// (A-2)
	const chk = list.map(item => (
		<Checkbox key={item.id} data={item} onChange={onChangeStatus} onClick={onClick} />
	));

  return (
    <>

    <div>
    <div><h3 className="titulo">Tabla ToDo</h3></div>

			{list.length ? chk : "Sin Pendientes"}

			{list.length ? (

					<button 
					className="button" 
					onClick={onClickRemoveItem}>

					<h3>Borra Seleccionado</h3>
					

					</button>

			) : null}
		</div>
    </>
  )
}

export default TablaToDoApp;