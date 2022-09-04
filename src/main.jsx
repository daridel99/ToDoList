import React from 'react';
import ReactDOM from 'react-dom/client';
import {ToDoApp} from './components/ToDo';
import './styles.css';

ReactDOM.createRoot( document.getElementById('root')).render(

    <React.StrictMode>

        <ToDoApp  titulo_1={'To Do List 📥'} parrafo_1= {0}/>

    </React.StrictMode>

)