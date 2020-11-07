import React from "react";
// import components
import ToDo from "./ToDo"

const ToDoList = ( {toDos, setToDos, filteredToDos} ) => {
    return (

        <div className="todo-container">
            <ul className="todo-list">
                {filteredToDos.map((toDo) => (
                    <ToDo
                        key={toDo.id}
                        text={toDo.text}
                        toDos={toDos}
                        setToDos={setToDos}
                        toDo={toDo}
                    />
                ))}
            </ul>

        </div>

    );
};

export default ToDoList