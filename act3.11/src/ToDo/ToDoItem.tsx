import React from "react";
import { Button } from "react-bootstrap";
function ToDoItem({ content, removeElement } : { content: string, removeElement: (elemento: string) => void }) {

    
    return (
        <div>
            <li>{content}</li>
            <i className="borrar" onClick={() => removeElement(content) }>borrar</i>
        </div>
    )
}

export default ToDoItem;