import React from 'react';
import { Container, Image } from 'react-bootstrap';
import Actividad1 from './fotos /actividad1.jpeg';
import Actividad2 from './fotos /actividad2.jpeg';
import Actividad3 from './fotos /actividad3.jpeg';

function Actividades(){
    return (
        <>
        <Container>
            <h1>Actividades</h1>
                <p>París es una ciudad que puedes hacer cualquier cosa sin ningún tipo de problema.</p>
                <h2>Show en el Moulin Rouge</h2>
                    <p>Para llegar al Moulin Rouge, debes adentrarte en el barrio bohemio de París. En el bajo Montmartre, rodeado de tiendas eróticas y neones, se encuentra el cabaret más famoso de París, conocido sobre todo por los carteles de Toulouse Lautrec o por el baile del cancán.</p>
                    <p>Hoy en día algunos piensan que el Moulin Rouge es un museo, pero no: sigue funcionando como club nocturno al que puedes asistir comprar entradas para el Moulin Rouge:. El precio del espectáculo del Moulin Rouge no es barato, pero la experiencia merece la pena. Tanto si asistes a la cena como si decides comer algo cerca del Moulin Rouge, no olvides visitarlo por la noche para verlo iluminado y sentir el verdadero carácter de la zona.</p>
                    <Image src={Actividad1} fluid />
                <h2>Crucero por el río Sena</h2>
                    <p>Dar un paseo en barco por el Sena es una de las actividades más demandadas en la capital francesa. La disposición de los monumentos de la ciudad permite ver muchos de ellos desde el río y este tipo de crucero es una oportunidad perfecta para hacerlo de forma original y relajada.</p>
                    <p>Debido a su gran demanda, existen diferentes opciones como un crucero con cena por el Sena o como un crucero nocturno por el Sena, adecuadas a todos los presupuestos.</p>
                    <Image src={Actividad2} fluid />
                <h2>Visita las Catacumbas</h2>
                    <p>Si el París que hay en la superficie te ha enamorado, te falta el colofón a tu viaje: conocer el París subterráneo. Las catacumbas de París son un viaje apasionante por el pasado de esta ciudad y sin duda una visita más que interesante si quieres conocer más sobre su historia. ¡Ojo! Abrígate porque dentro por la humedad hace bastante frío.</p>
                    <Image src={Actividad3} fluid />
        </Container>
        </>
    )
}
export default Actividades