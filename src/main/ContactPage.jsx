import Formulario from "./Formulario/Formulario"
import { NavBar } from "./NavBar/NavBar"
import Footer from "./Footer/Footer"
import PortadaContact from "./PortadaContact/PortadaContact"

function ContactPage() {

    return (

        <>
            
            <NavBar/>
            <PortadaContact />
            <Formulario/>
            <Footer/>
        </>
        
    )
}
export default ContactPage