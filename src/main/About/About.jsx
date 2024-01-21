import imageGroup from '../../assets/icons/grupo.png'
import imageCampus from '../../assets/images/sede_imagen.jpg'
import './About.scss'
function About() {

    return (
        <> 
            <main className="container text-center">
                <h1>NOSOTROS</h1>
                <div className="us">
                <img className="us__img-icono" src={imageGroup} alt="grupo"/>
                <div className="us__content" > 
                    <p>
                    Autoplanet, con más de 10 años de trayectoria en la región, se ha posicionado como líder del mercado de repuestos en Chile e incursionado desde hace unos meses
                    en el mercado de repuestos de Colombia. Esta propuesta nace como respuesta a las necesidades de los clientes automovilistas, conductores y talleres mecánicos 
                    que buscan una buena variedad de productos de marcas de calidad en un solo lugar. Y hoy llega a Perú, de forma acelerada para facilitar, de forma online, el acceso 
                    a un mundo de productos para tu auto.
                    </p>
                    <img className="us__image" src={imageCampus} alt="Image about us"/>
                </div>
                </div>
            
            </main>

        </>
    )
}
export default About