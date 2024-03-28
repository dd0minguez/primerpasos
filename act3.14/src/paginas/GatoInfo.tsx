import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Image from 'react-bootstrap/Image';


export interface InfoRaza {
  weight: Weight
  height: Height
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

export interface Weight {
  imperial: string
  metric: string
}

export interface Height {
  imperial: string
  metric: string
}


export interface RazaInfoProps {
  
  id: string;
}


const RazaInfo = ({ id }: { id: string }) => {
  const [infoRaza, setInfoRaza] = useState<InfoRaza[]>([]);
  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/breeds/${id}`, {
      headers: {
        "x-api-key": "2",
      },
    })
      .then((response) => response.json())
      .then((data: InfoRaza) => {
        setInfoRaza([data]);
      });
  }, [id]);



  return (
     <Container className="d-flex fluid">
      <div>
      
      {infoRaza.map((raza) => (
        <Card key={raza.id}>
          <Card.Body >
            <h1>Información</h1>
            <Card.Title>{raza.name}</Card.Title>
              <h4>Detalles:</h4> {raza.description}
            <Card.Img />
              <Image className="img-fluid align-self-center"
                src={"https://cdn2.thecatapi.com/images/"+raza.reference_image_id+".jpg"}
                alt={raza.name}
                fluid
              />
          </Card.Body>
        </Card>
      ))}
      </div>
    </Container>
  );
};

export default RazaInfo;