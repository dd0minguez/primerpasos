import React, { useState, useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import RazaInfo from "./GatoInfo";
import RazaPInfo from "./PerrosInfo";
import Menu from "./Navbar"
export type RazasG = Raza1[];
export type RazasP = Raza2[];

export interface Raza1 {
  weight: Weight;
  height: Height;
  id: number;
  name: string;
  bred_for?: string;
  breed_group?: string;
  life_span: string;
  temperament?: string;
  origin?: string;
  reference_image_id: string;
  country_code?: string;
  description?: string;
  history?: string;
}
export interface Raza2 {
  weight: Weight;
  height: Height;
  id: number;
  name: string;
  bred_for?: string;
  breed_group?: string;
  life_span: string;
  temperament?: string;
  origin?: string;
  reference_image_id: string;
  country_code?: string;
  description?: string;
  history?: string;
}
export interface Weight {
  imperial: string;
  metric: string;
}

export interface Height {
  imperial: string;
  metric: string;
}
const Raza = () => {
  const [razasG, setRazasG] = useState<RazasG>([]);
  const [razasP, setRazasP] = useState<RazasP>([]);
  const [selectRazaIdG, setSelectRazaIdG] = useState<string>();
  const [selectRazaIdP, setSelectRazaIdP] = useState<string>();

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/breeds", {
      headers: {
        "x-api-key": "2",
      },
    })
      .then((response) => response.json())
      .then((data: RazasG) => {
        setRazasG(data);
      });
  }, []);

  const seleccionRazaG = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectRazaIdG(event.target.value);
  };

  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/breeds", {
      headers: {
        "x-api-key": "22",
      },
    })
      .then((response) => response.json())
      .then((data: RazasP) => {
        setRazasP(data);
      });
  }, []);

  const seleccionRazaP = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectRazaIdP(event.target.value);
  };
  return (
        
        <Container fluid className="bg-info-subtle">
          <div className="d-flex align-items-center justify-content-center">
            <h1>Razas de gatos</h1>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <p>
              Bienvenido a la página donde descubriras que tipo de gato es el
              elegido para ser tu compañero de vida.
            </p>
          </div>
          <Row>
            <Col className="d-flex align-items-center justify-content-center">
              <h2>Gatos</h2>
              <div>
                <Form.Select value={selectRazaIdG} onChange={seleccionRazaG}>
                  <option value="">Seleccione una raza de gato</option>

                  {razasG.map((raza) => (
                    <option value={raza.id}>{raza.name}</option>
                  ))}
                </Form.Select>
              </div>
            </Col>
            {selectRazaIdG && <RazaInfo id={selectRazaIdG} />}
            <Col className="d-flex align-items-center justify-content-center" md={6}>
                    <h2 >Perros</h2>
                    <div>
                      <Form.Select value={selectRazaIdP} onChange={seleccionRazaP}>
                      <option value="">Seleccione una raza de perro</option>
              
                      {razasP.map((razaP) => (
                          <option value={razaP.id}>
                          {razaP.name}
                          </option>
                      ))}
                      </Form.Select >
                    </div>
                    {selectRazaIdP && <RazaPInfo id={selectRazaIdP} />}
                </Col>
          </Row>
        </Container>
  );
};
export default Raza;
