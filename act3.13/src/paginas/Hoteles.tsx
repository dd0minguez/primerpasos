import React from 'react'
import { Container, Image } from 'react-bootstrap'
import Hotel1 from './fotos /Hotel1.jpeg'
import Hotel2 from './fotos /hotel2.jpeg'

function Hoteles(){
    return (
        <>
            <Container>
                <h1>Hoteles</h1>
                    <p>Si lo que quieres es disfrutar de París de una forma idilica y parecer que estas en una pelicula, aqui te dejo una lista de los hoteles mas famosos de la ciudad francesa.</p>
                    <h2>Hotel Plaza Athenee</h2>
                        <p>Se inauguró en 1913, el mismo año en que se inauguró el edificio Wollworth en la ciudad de Nueva York, la construcción terminó en el Canal de Panamá y las cajas de Cracker Jack se llenaron de premios por primera vez.</p>
                        <p>Josephine Baker, Rudolph Valentino, Marlene Dietrich, Grace Kelly, Ava Gardner, Jacqueline Kennedy, Elizabeth Taylor y Richard Burton, son algunos de los famosos mas característicos que se han hospedado en este hotel.</p>
                        <p>Aquí también fue donde el estilista y diseñador Christian Dior mostró su coleccion de vestimenta inaugural en 1947. Siete décadas después, el hotel alberga el primer Dior Institut. El hotel también tiene 5 restaurantes supervisados por el chef estrella Alain Ducasse y alberga uno de los patios interiores más bonitos de la ciudad, el Cour Jardin, cubierto de hiedra.</p>
                        <p>Los precios por hospedarse en este iconico hotel, oscilan entre los 2.000€</p>
                        <Image src={Hotel1} thumbnail/>
                    <h2>Hotel Ritz</h2>
                        <p>El hotel Ritz de París fue un éxito rotundo desde el principio. De las monarcas, jefes de negocios y miembros de la alta sociedad que acudieron a su noche de inauguración en 1898.</p>
                        <p>Ernest Hemingway, Marcel Proust, Coco Chanel, el rey Alfonso de España, los duques de Windsor o la princesa Diana de Gales, son algunas de las caras más famosas que se han hospedado en es maravilloso hotel.</p>
                        <p>El glamour empapado de champán y la leyenda del Ritz no puede ser exagerados. El hotel ha alcanzado durante mucho tiempo el status de hito cultural, con apariciones en peliculas y con exigencias hasta a las mismisimas fuerzas alemanas durante la ocupación en la segunda Guerra Mundial.</p>
                        <p>Los precios oscilan entre 6.500€</p>
                        <Image src={Hotel2} thumbnail />
                    
            </Container>
        </>
    )
}
export default Hoteles