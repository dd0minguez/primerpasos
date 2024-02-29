import React from "react"
import { sitios } from "./lista"
import Filas from "./row"

function Table(){
    return (
        <table>
            <tr>
                <th>Destino</th>
                <th>Poblacion</th>
                <th>Visitado</th>
                <th>Imagen</th>
            </tr>
            {sitios.map((fila, index) => (
                <Filas key={index} {...fila}/>
            ))}
        </table>
    )
}

export default Table