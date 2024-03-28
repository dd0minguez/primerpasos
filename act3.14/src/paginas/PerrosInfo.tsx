import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Image from 'react-bootstrap/Image';


export interface InfoRazaP {
  weight: WeightP
  height: HeightP
  id: number
  name: string
  bred_for?: string
  breed_group?: string
  life_span: string
  temperament?: string
  origin?: string
  reference_image_id: string
  country_code?: string
  description?: string
  history?: string
}

export interface WeightP {
  imperial: string
  metric: string
}

export interface HeightP {
  imperial: string
  metric: string
}


export interface RazaInfoPropsP {
  
  id: string;
}


const RazaPInfo = ({ id }: { id: string }) => {
  const [infoRazaP, setInfoRazaP] = useState<InfoRazaP[]>([]);
  useEffect(() => {
    fetch(`https://api.thedogapi.com/v1/breeds/${id}`, {
      headers: {
        "x-api-key": "22",
      },
    })
      .then((response) => response.json())
      .then((data: InfoRazaP) => {
        setInfoRazaP([data]);
      });
  }, [id]);



  return (
     <Container className="d-flex fluid">
      <div>
      
      {infoRazaP.map((razaP) => (
        <Card key={razaP.id}>
          <Card.Body >
            <h1>Información</h1>
            <Card.Title>{razaP.name}</Card.Title>
              <h4>Detalles:</h4> {razaP.description}
            <Card.Img />
              <Image className="img-fluid align-self-center"
                src={"https://cdn2.thedogapi.com/images/"+razaP.reference_image_id+".jpg"}
                alt={razaP.name}
                fluid
              />
          </Card.Body>
        </Card>
      ))}
      </div>
    </Container>
  );
};

export default RazaPInfo;