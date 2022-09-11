import React, { Fragment } from "react";

const Checkbox = props => {

	const {
		onChange,
		data: { id, description, done, dateV },
		onClick
	} = props;

	return (
		<div className='tareaINV-T'>
		
			<label className="todo new-item" onClick={()=> onClick(id)}>
			<div>
				<i className="material-icons"> update </i>
				<input
					className="todo__state"
					name={id}
					id={id}
					type="checkbox"
					defaultChecked={done}
					onChange={onChange}
				/>
				<i className="material-icons"> delete </i>
				
		</div>
		</label>
		<div 
		className='tareaINV'
		>
			<p>{description} <br/> se entrega en la fecha {dateV}</p>

				<br/><br/><br/>
		</div>


			</div>

	);
};

export default Checkbox;
