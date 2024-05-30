import React from 'react'
import Seo from '../../components/common/seo/Seo'
import Header from '../../components/marketing-agency/Header'
import CarouselBanners from '../../components/ytgroup/CarouselBanners'
import Section1YT from '../../components/ytgroup/Section1YT'
import CounterUp from '../../components/creative-agency/CounterUp'

const YtGroup = () => {
  return (
    <div className='main-page-wrapper light-bg'>
      <Seo title='Creative Agency' />
      <Header />
      <CarouselBanners />
      <Section1YT />
      <div className='counter-section-one mt-225 xl-mt-150 md-mt-80'>
        <div className='inner-container'>
          <div className='row justify-content-center'>
            <CounterUp />
          </div>
          {/* End .row */}
        </div>
      </div>
    </div>
  )
}

export default YtGroup
