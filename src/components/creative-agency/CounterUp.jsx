import React from 'react'
import CountUp from 'react-countup'
import { InView } from 'react-intersection-observer'

const counterUpContent = [
  {
    id: 1,
    startCount: '0',
    endCount: '200',
    endPointText: '+',
    meta: 'Ejecutivos de venta',
    animationDelay: '0',
  },
  {
    id: 2,
    startCount: '0',
    endCount: '100',
    endPointText: '%',
    meta: 'Atencion a nivel nacional',
    animationDelay: '100',
  },
  {
    id: 3,
    startCount: '0',
    endCount: '20',
    endPointText: '+',
    meta: 'de experiencia con clientes en diferentes industrias',
    animationDelay: '200',
  },
  {
    id: 4,
    startCount: '0',
    endCount: '100',
    endPointText: 'M+',
    meta: 'Contactos de clientes en nuestra data base.',
    animationDelay: '100',
  },
]

const CounterUp = () => {
  const [focus, setFocus] = React.useState(false)
  return (
    <>
      {counterUpContent.map((val, i) => (
        <div
          className='col-md-3 col-sm-6'
          data-aos='fade-up'
          data-aos-delay={val.animationDelay}
          key={val.id}
        >
          <div className='counter-block-one text-center mb-45'>
            <div className='main-count font-recoleta'>
              <span className='counter'>
                <CountUp
                  start={focus ? val.startCount : null}
                  end={val.endCount}
                  duration={5}
                  redraw={true}
                >
                  {({ countUpRef }) => (
                    <InView
                      as='span'
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setFocus(true)
                        }
                      }}
                    >
                      <span ref={countUpRef} />
                    </InView>
                  )}
                </CountUp>
              </span>
              {val.endPointText}
            </div>
            <p className='theme-mb-0'>{val.meta}</p>
          </div>
          {/* <!-- /.counter-block-one --> */}
        </div>
      ))}
    </>
  )
}

export default CounterUp
