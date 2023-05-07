import classes from './Card.module.css'
import Pmtools from '../../assets/pmtools.png'
import { useProductContext } from '../../context/ProductContext'
import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Navigation } from 'swiper'

import 'swiper/swiper-bundle.min.css'

import 'swiper/css'

const Card = ({ list, slider }) => {
  const { updateProductContext } = useProductContext()

  const navigate = useNavigate()

  const OnClickHandler = productId => {
    const clickedProduct = list.find(product => product.id === productId)

    updateProductContext(clickedProduct)

    navigate(`/proizvodi/:${clickedProduct.name}`)
    window.scrollTo(0, 0)
  }

  return (
    <>
      {slider ? (
        <div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            onSlideChange={() => console.log('slide change')}
            onSwiper={swiper => console.log(swiper)}
          >
            {list.map((product, i) => (
              <SwiperSlide key={i}>
                <div className={classes['slider-card']}>
                  <div>
                    <img src={product?.thumb} alt="" />
                  </div>
                  <div className={classes.content}>
                    <h3>{product.title}</h3>
                    <img src={Pmtools} alt="" />
                    <button onClick={() => OnClickHandler(product.id)}>
                      Saznaj više
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className={classes['products-wrapper']}>
          {list.map(product => (
            <div className={classes.product} key={product.id}>
              <div className={classes['img-wrapper']}>
                <img src={product?.thumb} alt="" />
              </div>
              <div className={classes.content}>
                <h3>{product.title}</h3>
                <img src={Pmtools} alt="" />
                <button onClick={() => OnClickHandler(product.id)}>
                  Saznaj više
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Card
