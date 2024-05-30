import { Link } from 'react-router-dom'
// import banner2 from "../../../assets/images/media/banner2.png";
// import banner2_1 from "../../../assets/images/media/banner2.1.png";
import { LazyLoadImage } from 'react-lazy-load-image-component'

function BannerTwo() {
  return (
    <div className='hero-banner-two'>
      <h1 className='body'>
        BIENVENIDO A UN MUNDO <br /> LLENO DE OPORTUNIDADES
      </h1>
      <p className='w-75 pt-lg-5'>
        "Conectando su empresa con oportunidades ilimitadas. Nuestro <br />
        enfoque personalizado impulsa el crecimiento de su negocio mientras
        <br />
        usted se enfoca en lo que más importa."
      </p>
    </div>
  )
}

export default BannerTwo
