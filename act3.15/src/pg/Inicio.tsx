import React, { useState, useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
export type Coches = Coche[]

export interface Coche{
    coche: string
    id: number
    disponible: boolean
    imagen: string
}
function Inicio(){
    const [Coches, setCoches] = React.useState<Coches>([]);
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/dd0minguez/primerpasos/main/act3.15/info.json", {
        })
          .then((response) => response.json())
          .then((data: Coches) => {
            setCoches(data);
          });
      }, []);

      return (
        
            <Container>
                <Col>
                    {Coches.map((Coche, i) => (
                        <Row>
                            <div key={i}>
                                <h1>{Coche.coche}</h1>
                                <p>{Coche.disponible ? "Disponible" : "No disponible"}</p>
                                <img className="img-fluid align-self-center" src={Coche.imagen} alt={Coche.coche} />
                            </div>
                        </Row>
                    ))}
                </Col>
            </Container>
        
      );
}

export default Inicio