import React, { useState, useEffect } from 'react';
import './App.css';
// import Components
import Form from './components/Form'
import ToDoList from "./components/ToDoList";

function App() {
    // state
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredToDos, setFilteredToDos] = useState([]);
    useEffect(() => {
        getLocalToDos();
    }, []);
  // use effect
    useEffect(() => {
        filterHandler();
        saveLocalToDos();
    },[toDos, status]);
  // function
    const filterHandler = () => {
        switch (status) {
            case "completed":
                setFilteredToDos(toDos.filter(toDo => toDo.completed === true));
                break;
            case "uncompleted":
                setFilteredToDos(toDos.filter(toDo => toDo.completed === false));
                break;
            default:
                setFilteredToDos(toDos);
                break;
        }
    };
    const saveLocalToDos = () => {
        localStorage.setItem("toDos", JSON.stringify(toDos));
    };
    const getLocalToDos = () => {
        if(localStorage.getItem("toDos") === null) {
            localStorage.setItem("toDos", JSON.stringify([]));
        }
        else {
            let toDoLocal = JSON.parse(localStorage.getItem("toDos"));
            setToDos(toDoLocal);
        }
    };
  return (
    <div className="App">
        <header>
            <h1>Khuong's Todo List</h1>
        </header>
        <Form
            inputText={inputText}
            toDos={toDos}
            setToDos ={setToDos}
            setInputText={setInputText}
            status={status}
            setStatus={setStatus}
        />
        <ToDoList
            filteredToDos={filteredToDos}
            setToDos={setToDos}
            toDos={toDos}
        />
    </div>
  );
}

export default App;
