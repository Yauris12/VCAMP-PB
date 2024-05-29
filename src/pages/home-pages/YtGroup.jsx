import React from 'react'
import Seo from '../../components/common/seo/Seo'
import Header from '../../components/marketing-agency/Header'
import CarouselBanners from '../../components/ytgroup/CarouselBanners'

const YtGroup = () => {
  return (
    <div className='main-page-wrapper light-bg'>
      <Seo title='Creative Agency' />
      <Header />
      <CarouselBanners />
    </div>
  )
}

export default YtGroup
