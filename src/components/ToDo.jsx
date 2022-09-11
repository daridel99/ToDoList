
//import PropTypes, { string } from 'prop-types';
import { useEffect, useState } from 'react';
import CreacionToDoApp from "./CreacionToDo";
import TablaToDoApp from "./TablaToDo";

export const ToDoApp = () => {

  const [list, setList] = useState([]); 
  const [id, setId] = useState(-1); 

  useEffect(()=> {

    const obtenerDataLocalStore = () =>{

      const tareasLocalStore = JSON.parse(localStorage.getItem("tareas")) ?? [];

      /*const request = new XMLHttpRequest();
      request.open('GET', 'https://62c7cf638c90491c2ca7c0e9.mockapi.io/ToDo', true);
    
      request.onload = function () {        
        
        const data = JSON.parse(this.response);
        
          console.log(data)
          //setList(data);
    }
    request.send();*/
      
      setList(tareasLocalStore);

    };

    obtenerDataLocalStore()

    }, []);
  
    useEffect(()=> {

    localStorage.setItem('tarea', JSON.stringify(list))
    /*
    console.log(String(list.id));
    console.log(list.dateV);
    console.log(list.description);
    axios.post('https://62c7cf638c90491c2ca7c0e9.mockapi.io/ToDo', {

      //id: parseInt(list.id, 10)
      //list
      "id": parseInt(list.id,),
      "done": Boolean(list.done),
      "dateV": String(list.dateV),
      "description": String(list.description)

		  })

		  .then(function (response) {
			console.log(response);
		  })

		  .catch(function (error) {
			console.log(error);
		  });
*/
    }, [list])

	  const handleAddItem = addItem => {

    const index = list?.findIndex(elemento => elemento.id === addItem.id);

    //localStorage.setItem('tarea', JSON.stringify(list))
   /* console.log(String(list.id));
    console.log(list.dateV);
    console.log(list.description);
    axios.post('https://62c7cf638c90491c2ca7c0e9.mockapi.io/ToDo', {

    //addItem,

    "id": addItem.id,
    "dateV": addItem.dateV,
    "done": addItem.done,
    "description": addItem.description

		  })

		  .then(function (response) {
			console.log(response);
		  })

		  .catch(function (error) {
			console.log(error);
		  });*/


    if( index === -1 ){

      setList([...list, addItem]); 
      setId(-1);
    }

    else{

      const nuevaLista = [... list];
      console.log(nuevaLista[index])
      if(Boolean(nuevaLista[index].done)){
      nuevaLista[index]=addItem;
      var miCheckbox = document.getElementById(nuevaLista[index].id)
      miCheckbox.checked = false;
      console.log(nuevaLista[index])
      setList(nuevaLista);
      setId(-1);
      }

    }
	 //setId(-1);
  };

  const onClick = ( id ) => {
    console.log(id); 
    setId(String(id))
    console.log(list);}

  return (
    <>
    <header>
    <div className="titulo">
    <h1 ><img className="img-spider" src="./spidey.png" width="5%"/> To Do List 📥 </h1>
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