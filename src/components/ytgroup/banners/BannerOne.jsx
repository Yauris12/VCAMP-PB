import { Link } from 'react-router-dom'
// import banner1 from "../../../assets/images/media/banner1.png";
// import banner1_1 from "../../../assets/images/media/banner1.1.png";
// import banner1_2 from "../../../assets/images/media/banner1.2.png";
// import banner1_3 from "../../../assets/images/media/banner1.3.png";
// import banner1_4 from "../../../assets/images/media/banner1.4.png";
// import banner1_5 from "../../../assets/images/media/banner1.5.png";
import { LazyLoadImage } from 'react-lazy-load-image-component'

function BannerOne() {
  return (
    <div className='hero-banner-one'>
      <h1 className=''>
        HACEMOS <br /> QUE LAS VENTAS <br />
        SUCENDAN
      </h1>
      <p className='w-75'>
        "Conectando su empresa con oportunidades ilimitadas. Nuestro enfoque
        personalizado impulsa el crecimiento de su negocio mientras usted se
        enfoca en lo que más importa."
      </p>
    </div>
  )
}

export default BannerOne
