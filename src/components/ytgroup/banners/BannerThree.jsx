import { Link } from 'react-router-dom'
// import banner3_1 from "../../../assets/images/media/banner3-1.png";
import banner31 from '../../../assets/images/ytgroup/banner31.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function BannerThree() {
  return (
    <div className='hero-banner-yt'>
      <div className='body'>
        <div className='container_yt'>
        <div className="container_title">
          <h1 className='title'>
          BIENVENIDO A UN MUNDO LLENO <br/> DE OPORTUNIDADES
          </h1>
        </div>
        </div>
        <LazyLoadImage className='image_yt' src={banner31} />
      </div>
    </div>
  )
}

export default BannerThree
