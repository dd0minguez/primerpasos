import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import Restaurante1 from './fotos /restaurante1.webp'
import Restaurante2 from './fotos /restaurante2.webp'
import Restaurante3 from './fotos /restaurante3.webp'

function Restaurantes(){
    return(
        <>
            <Container>
                <Row>
                    <h1>Restaurantes</h1>
                    <p>Estos son una recopilación de los mejores restaurantes que te puedes encontrar en París desde un precio asequible, hasta el más sofisticado.</p>
                </Row>
                <Row>
                    <Col xs={12} md={6} lg={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Restaurante1} />
                            <Card.Body>
                                <Card.Title>Le Sot l'y Laisse</Card.Title>
                                <Card.Text>
                                Le Sot l'y Laisse es uno de aquellos restaurantes que nos encanta compartir, aunque esperamos que este secreto no se extienda mucho por miedo a que se vuelva demasiado conocido. Situado en un barrio moderno a poca distancia del cementerio del Père Lachaise, presenta un entorno agradable donde los colores, las texturas y los sabores regalan a los visitantes una deliciosa sensación de placer y sencillez a la vez.
                                </Card.Text>
                                <Button variant="light">
                                    <Card.Link href='https://www.restaurantlesotlylaisse.com/es/'>Sitio web</Card.Link>
                                    </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Card style={{ width: '18rem' }} bg={'Light'.toLowerCase()}>
                            <Card.Img variant="top" src={Restaurante2} />
                            <Card.Body>
                                <Card.Title>Au Petit Rozey</Card.Title>
                                <Card.Text>
                                Las tablas gourmet de la vinoteca Au Petit Rozey merecen tanto una visita como sus vinos. Se encuentra en el barrio de Batignolles, en el distrito 17, un barrio familiar pero de moda repleto de sorpresas del que el Au Petit Rozey toma su espíritu. Aquí, los habituales se mezclan con los visitantes alrededor de su antigua barra de zinc en un ambiente sosegado que invita a la conversación.
                                </Card.Text>
                                <Button variant="light">
                                    <Card.Link href='https://www.instagram.com/aupetitrozey/' >Sitio web</Card.Link>
                                    </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Restaurante3} />
                            <Card.Body>
                                <Card.Title>Le Septime</Card.Title>
                                <Card.Text>
                                Le Septime ofrece un entorno de lo más agradable gracias a su ambiente moderno con vigas de metal, grandes ventanales y mesas de madera en bruto. Su pasión por la cocina es un deleite para las papilas gustativas. Los sofisticados platos de este restaurante, epicúreo por naturaleza, combinan productos de primera calidad de productores de todo el mundo con una precisión que te dejará sin palabras.
                                </Card.Text>
                                <Button variant="light">
                                    <Card.Link href='https://www.septime-charonne.fr'>Sitio web</Card.Link>
                                    </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Restaurantes