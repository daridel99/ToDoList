import React from "react";
import Checkbox from "./Checkbox";

const TablaToDoApp = props => {

  const { list, setList, onClick } = props;

	const onChangeStatus = e => {
		const { name, checked } = e.target;

		const updateList = list.map(item => ({
			...item,
			done: item.id === name ? checked : item.done
		}));
		setList(updateList);
	};

	const onClickRemoveItem = e => {
		if(confirm('confirma que desa borrarlo?'))  { 
		const updateList = list.filter(item => !item.done);
		setList(updateList);
	}
	else{

		console.log('You clic cancel')
		
	}
	};

	const chk = list.map(item => (
		<Checkbox key={item.id} data={item} onChange={onChangeStatus} onClick={onClick} />
	));

  return (
    <>

    <div>
    <div><h3 className="titulo">Tabla ToDo</h3></div>

			{list.length ? chk : <center><br/><h2>Sin Pendientes</h2></center>}

			{list.length ? (

					<button 
					className="button" 
					onClick={onClickRemoveItem}>

					<h3>Borra Seleccionado</h3>
					

					</button>

			) : null}
		</div>
    </>
  );
};

export default TablaToDoApp;