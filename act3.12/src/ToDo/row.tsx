import React from "react"

interface fila{
    destino: string;
    poblacion: number;
    visitado: boolean;
    imagen: string;
}
const filas: React.FC<fila> = ({
    destino,
    poblacion,
    visitado,
    imagen,
}) => {
    return (
        <tr>
            <td>{destino}</td>
            <td>{poblacion}</td>
            <td>{visitado ? 'Si': 'No'}</td>
            <td><img src={imagen}/></td>
        </tr>
    );
};

export default filas