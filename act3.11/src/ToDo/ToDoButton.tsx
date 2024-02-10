import React, { ChangeEvent } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function ToDoButton(){
    const [val, setVal] = React.useState("");
    function onChange(e: ChangeEvent<HTMLInputElement>)  { 
        setVal(e.target.value)
    }
    return(
    <InputGroup>
        <Form.Control
        onChange={onChange}
          placeholder="Inserta una tarea"
          value={val}
        />
        <Button variant="success" onClick={() => setVal(val)}>Añadir</Button>
    </InputGroup>
    )
}

export default ToDoButton