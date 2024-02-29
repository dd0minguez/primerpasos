import React from "react";
import TodoItem from "./TodoItem";
import {Button} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function TodoList(){
    const [tasks, setTask] = React.useState(["Tasca1", "Tasca2"]);

    function addTask(texto: string){
        setTask(currentTasks => [...currentTasks, texto]);
        <InputGroup>
            <Form.Control
                placeholder="Recipient's username"
                aria-label="Recipient's username with two button addons"
        />
        <Button variant="outline-secondary">Quitar</Button>
    </InputGroup>
    }
    return(
        <div>
            <h2>La meva Llista de Tasques</h2>
            <ul>
                {tasks.map((task, index) => ( 
                    <TodoItem key = {index} content={task} />))}
            </ul>
            <Button variant="success" onClick={() => addTask("Nueva tarea")}>Añadir tarea</Button></div>
    );
}
export default TodoList;
