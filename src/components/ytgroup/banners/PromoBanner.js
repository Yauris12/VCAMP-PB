import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import devices from '../../../assets/images/media/devices.png'

function PromoBanner({ handleButtonClick }) {
    return (
        <div className="feature-section-baner-promo flex justify-center items-center">
            <div className="body flex flex-col justify-center items-center gap-6">
                <h2>¡Tu e-commerce en simples pasos!</h2>
                <p>
                    Haz crecer tu negocio con una plataforma con los mejores cuadros de análisis, pasarela de pago integrado y soporte técnico especializado.
                </p>
                <h3 className="title"><span>Crea</span> tu tienda virtual<br /> a sólo <span>$59</span></h3>
                {/* <button><Link to={"/nueva-tienda"}>Crear tu tienda</Link></button> */}
                <div className="content-image flex flex-col justify-center items-center">
                    <LazyLoadImage src={devices} alt="tienda" />
                    {/* <div className="overlay flex justify-center items-center">
                        <p>$<span>16</span> Antes</p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default PromoBanner;