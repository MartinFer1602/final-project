import './Hero.scss'
function Hero(){

    return (

        <>
            
            <section>
                <div className="hero container-fluid p-0">
                {/* Ruta relativa a la carpeta public */}
                    <video src="video/VID_20231125_025649.mp4" autoPlay muted loop className="video-fluid" alt="video"></video>
                    <div className="text-overlay">
                        <h1>GOLD CAR</h1>
                        <p>Engreímos a tu carro a un click!</p>
                    </div>
                    
                
                    
                </div>
            </section>

        </>
        

    )
}
export default Hero