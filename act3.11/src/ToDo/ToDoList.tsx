import React, { ChangeEvent } from "react";
import ToDoItem from "./ToDoItem";
import {Button} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function ToDoList(){
    const [tasks, setTask] = React.useState(["Tareas"]);

    const [val, setVal] = React.useState("");
    function onChange(e: ChangeEvent<HTMLInputElement>)  { 
        setVal(e.target.value)
    }

    function addTask(val: string){
        setTask(currentTasks => [...currentTasks, val]);
    }
    function removeElement(elemento:string) {
        setTask(prevTasks => prevTasks.filter(item => item !== elemento))
    }
    
    return(
        <div>
        <InputGroup>
        <Form.Control
            onChange={onChange}
            placeholder="Inserta una tarea"
            value={val}
        />
        <Button variant="success" onClick={()=> addTask(val)}>Añadir</Button>
        </InputGroup>
            <h2>Llista de Tasques</h2>
            <ul>
                {tasks.map((task, index) => (
                    <ToDoItem key = {index} content={task} removeElement={removeElement}/>))}
            </ul>
            {/* <Button variant="success" onClick={() => addTask("Nueva tarea")}>Añadir tarea</Button> */}
            </div>
        
    );
}
export default ToDoList;