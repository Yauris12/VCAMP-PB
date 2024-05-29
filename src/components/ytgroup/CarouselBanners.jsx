import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import BannerOne from './banners/BannerOne'
import BannerTwo from './banners/BannerTwo'
import BannerThree from './banners/BannerThree'

function CarouselBanners() {
  const [slideIndex, setSlideIndex] = useState(0)

  // Funciones para avanzar y retroceder el carrusel
  const showNextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % 3) // 3 es el número total de componentes
  }

  const showPrevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + 3) % 3)
  }

  const showSlide = (index) => {
    setSlideIndex(index)
  }

  useEffect(() => {
    const intervalId = setInterval(showNextSlide, 10000)
    return () => clearInterval(intervalId)
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  }

  return (
    <div className='position-relative bottom-2'>
      <Slider {...settings}>
        <BannerOne />
        <BannerTwo />
        <BannerThree />
      </Slider>
    </div>
  )
}

export default CarouselBanners
