import PropTypes, { string } from 'prop-types';
import { useEffect, useState } from 'react';
import CreacionToDoApp from "./CreacionToDo";
import TablaToDoApp from "./TablaToDo";

export const ToDoApp = () => {

  const [list, setList] = useState([]); 
  const [id, setId] = useState(-1); 

  useEffect(()=> {

    const obtenerDataLocalStore = () =>{

      const tareasLocalStore = 
        JSON.parse(localStorage.getItem("tareas")) ?? [];
      setList(tareasLocalStore);

    };

    obtenerDataLocalStore()

    }, []);
  
  useEffect(()=> {

    localStorage.setItem('tarea', JSON.stringify(list))

  }, [list])

	const handleAddItem = addItem => {

    const index = list?.findIndex(elemento => elemento.id === addItem.id);

    console.log(index);
    console.log(addItem);

    if( index === -1){

      setList([...list, addItem]); 

    }

    else{

      const nuevaLista = [... list];
      console.log(nuevaLista[index])
      nuevaLista[index]=addItem;
      console.log(nuevaLista[index])
      setList(nuevaLista);

    }
	 setId(-1);
  };

  const onClick = ( id ) => {
    console.log(id); 
    setId(String(id))
    console.log()
    console.log(list);}

  return (
    <>
    <header>
    <div className="titulo">
    <h1 ><img className="img-spider" src="./public/spidey.png" width="5%"/> To Do List 📥 </h1>
    </div>
    </header>

    <div className="creacion">
    <CreacionToDoApp handleAddItem={handleAddItem} elemento={list[list?.findIndex(elemento => elemento.id === id)]}/>
    
    </div>
    <div className="lista">
    <TablaToDoApp list={list} setList={setList} onClick={onClick}/>
    </div>
    </>
  );
};