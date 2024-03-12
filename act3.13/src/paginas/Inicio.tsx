import React from 'react';
import Image from 'react-bootstrap/Image';
import Paris from './fotos /paris.jpg';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Inicio() {
    return (
        <>
        <Image src={Paris} fluid />
        
        <Container>
                <h1>París</h1>
                <p>Es la capital de Francia y su ciudad más poblada. Capital de la región de Isla de Francia, constituye el único departamento unicomunal del país.</p>
                <p>Establecida en el centro de la cuenca de París, en un bucle del Sena, entre las confluencias con el Marne y el Oise. Fue ocupada desde el siglo III a. C. por el pueblo galo de los Parisii, en el sitio original de Lutecia, del cual toma el nombre de París alrededor del año 310, para irse extendiendo en su área circundante. Capital del reino de los francos durante el reinado de Clodoveo I, París se convirtió en una de las principales ciudades de Francia durante el siglo X, con palacios reales, ricas abadías y una catedral.</p>
                <p>Durante el siglo XII, con la Universidad de París, la ciudad se convirtió en uno de los primeros centros de Europa para la educación y las artes. Fijado el poder real en esta ciudad, su importancia económica y política no dejó de crecer. Así, a principios del siglo XIV, París era una de las ciudades más importantes del mundo cristiano. Desde el siglo XVI, fue la metrópolis del imperio colonial francés hasta el siglo XX.</p>
                <p>En los siglos XVII y XVIII fue la capital de la principal potencia mundial. En el siglo XIX, fue la capital primero del Imperio Napoleónico y luego de las artes y los placeres. En los siglos XX y XXI, es una de las principales ciudades de la Unión Europea. Desde la Edad Media, ha ocupado así un papel principal en el mundo a través de su actividad y su influencia.</p>
                <p>La ciudad de París tiene una población de aproximadamente 2,2 millones de habitantes en 2023. Sin embargo, en el siglo XX, el área metropolitana de París se expandió más allá de los límites del municipio de París, y es hoy en día, con una población de 14.684.473 habitantes en 2022, el área metropolitana más poblada del continente europeo y la 28 del mundo. La región de París es junto con la de Londres, uno de los núcleos económicos más importantes de Europa. Con 607 000 millones de euros (845 000 millones de dólares), produjo más de una cuarta parte del producto interior bruto (PIB) de Francia en 2011. La Défense es el principal barrio de negocios de Europa, alberga la sede social de casi la mitad de las grandes empresas francesas, así como la sede de veinte de las cien más grandes del mundo.</p>
                <p>Conocida también como la «Ciudad de la Luz» (en francés, Ville lumière), es el destino turístico más visitado del mundo, con más de 42 millones de visitantes extranjeros por año. Entre los monumentos de la ciudad figuran la Torre Eiffel, la Catedral de Notre Dame, la Avenida de los Campos Elíseos, el Arco de Triunfo, la Basílica del Sacré Cœur, el Palacio de Los Inválidos, el Panteón, el Arco de la Defensa, la Ópera Garnier y el barrio de Montmartre, entre otros. También museos como el Louvre, el Museo de Orsay y el Museo Nacional de Historia Natural de Francia, así como un extenso sistema de educación superior. París ocupa en el mundo un lugar preponderante en el ámbito de la cultura, la gastronomía, la moda y el lujo.</p>
        </Container>
        </>
    )
}
export default Inicio