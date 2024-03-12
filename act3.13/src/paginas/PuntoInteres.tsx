import React from 'react'
import Image from 'react-bootstrap/Image';
import Louvre from './fotos /louvre.jpg';
import { Container } from 'react-bootstrap';
import ArcoTriunfo from './fotos /arco_triunfo.jpg'
import TorreEiffel from './fotos /torreEiffel.jpg'

function PuntoInteres(){
    return(
        <>
        <Container>
            <h1>Puntos de Interés</h1>
                <p>París es una ciudad rica en museos y menumentos, gracias a toda la historia que tiene esta bellísima ciudad.</p>
                <h2>Monumetos</h2>
                    <h3>Arco del triunfo</h3>
                        <p>Es uno de los monumentos más famosos de la capital francesa y probablemente se trate del arco de triunfo más célebre del mundo. Construido entre 1806 y 1836 por orden de Napoleón Bonaparte para conmemorar la victoria en la batalla de Austerlitz, está situado en el VIII Distrito de París, sobre la plaza Charles de Gaulle, antiguamente denominada plaza de la Estrella, en el extremo occidental de la avenida de los Campos Elíseos, a 2,2km de la plaza de la Concordia, ubicada en el extremo oriental de dicha avenida. Tiene una altura de 50m, un ancho de 45m y una profundidad de 22m. La bóveda grande mide 29,19m de alto por 14,62m de ancho, mientras que la pequeña mide 18,68m de alto por 8,44m de ancho. Es gestionado por el Centro de los monumentos nacionales.</p>            <p>Forma una enorme rotonda con doce avenidas diseñadas en el siglo XIX bajo la dirección de Georges-Eugène Haussmann, entonces prefecto del departamento del Sena. Estas avenidas «irradian» en una estrella alrededor de la plaza, incluyendo la Avenida Kléber, la Avenida de la Grande-Armée, la Avenida de Wagram y la Avenida de los Campos Elíseos. El Monumento está abierto todos los días de 10:00 a 22:30 horas.</p>
                        <Image src={ArcoTriunfo} fluid/>
                    <h3>Torre Eiffel</h3>
                        <p>La torre Eiffel, inicialmente llamada Tour de 300 mètres («Torre de 300 metros») es una estructura de hierro pudelado diseñada inicialmente por los ingenieros civiles Maurice Koechlin y Émile Nouguier y construida, tras el rediseño estético de Stephen Sauvestre, por el ingeniero civil francés Gustave Eiffel y sus colaboradores para la Exposición Universal de 1889 en París.</p>
                        <p>Ubicada en el extremo del Campo de Marte a la orilla del río Sena, este monumento parisino, símbolo de Francia y de su capital, es la estructura más alta de la ciudad y el monumento turístico más visitado del mundo, con 7,1 millones de turistas cada año. Con una altura de 300 metros, prolongada más tarde con una antena hasta los 324 metros, la torre Eiffel fue la estructura más elevada del mundo durante cuarenta y un años. Es el monumento de pago más visitado del mundo.</p>
                        <p>Fue construida en dos años, dos meses y cinco días, y en su momento generó cierta controversia entre los artistas de la época, que la veían como un «monstruo» de hierro. Tras finalizar su función como parte de las Exposiciones Universales de 1889 y 1900, fue utilizada en pruebas del ejército francés con antenas de comunicación, y hoy en día sirve, además de atractivo turístico, como emisora de programas radiofónicos y televisivos. El 15 de marzo de 2022 se sustituyó la antena de radio con la ayuda de un helicóptero, pasando de 324 a 330 m de altura total.</p>
                        <Image src={TorreEiffel} fluid/>
                <h2>Museos</h2>
                    <h3>Louvre</h3>
                        <p>El museo del Louvre es el museo nacional de Francia consagrado tanto a las bellas artes como a la arqueología y las artes decorativas anteriores al impresionismo. Está ubicado en París, la capital del país, en el antiguo palacio real del Louvre. Sus extensas colecciones son el resultado del coleccionismo desarrollado por la monarquía francesa a lo largo de varios siglos, al que se sumó el esfuerzo de varias personalidades de la Ilustración, la labor desamortizadora de la Revolución francesa, las victorias militares durante las guerras napoleónicas, y las campañas arqueológicas y compras impulsadas durante el siglo XIX. En sus 210.000 m² se exponen unas 487.000 obras, de las cuales 7000 son pinturas, y unos 380.000 objetos y antigüedades.</p>
                        <p>La apertura del Louvre en 1793 significó, dentro de la historia de los museos, el traspaso de las colecciones privadas de las clases dirigentes (monarquía, aristocracia e Iglesia) a galerías de propiedad pública para disfrute del conjunto de la sociedad. Ello lo convirtió en precedente y modelo para varios museos.</p>
                        <p>En sus modificaciones arquitectónicas y decorativas han intervenido múltiples artistas a lo largo de varios siglos, desde Claude Perrault y los pintores Simon Vouet y Charles Le Brun en el XVII hasta Delacroix y Georges Braque, quienes pintaron algunos de sus techos.</p>
                        <p>El Louvre es el museo de arte más visitado del mundo, famoso por sus obras maestras, especialmente la pintura renacentista conocida como La Gioconda de Leonardo da Vinci. Otras piezas destacadas fueron seleccionadas en 2020 por el propio museo bajo el título «24 obras imprescindibles». La lista comprende, además de la ya citada pintura, obras como el Código de Hammurabi, El escriba sentado, La consagración de Napoleón y La Libertad guiando al pueblo, entre otros.</p>        
                        <Image src={Louvre} fluid/>
        </Container>
        </>
    )
}
export default PuntoInteres