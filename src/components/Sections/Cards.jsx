import { useEffect, useState } from 'react'
import { cards as data } from '../../data/cards'
import Container from '../UI/Container'
import classes from './Cards.module.css'

const Cards = () => {
  const [cards, setCards] = useState(data)
  const [clickedCard, setClickedCard] = useState(data[0])

  const onClickHandler = (e, index) => {
    setCards(
      cards.map((card, i) => {
        if (card.active && i !== index) return { ...card, active: false }
        if (i === index) return { ...card, active: true }
        // if (i === index && card.active) return card
        else return card
      })
    )

    setClickedCard(
      ...cards.filter((card, i) => {
        if (i === index) return card
      })
    )
  }

  useEffect(() => {
    console.log(clickedCard)
  }, [clickedCard])

  return (
    <section className={classes.cards}>
      <Container>
        <h2>Lorem ipsum</h2>
        <div className={classes.wrapper}>
          <div className={classes['left-side']}>
            <ul>
              {cards.map((card, i) => {
                return (
                  <div key={i}>
                    <li
                      onClick={(e) => {
                        onClickHandler(e, i)
                      }}
                    >
                      {card.title}
                    </li>
                    <div className={classes.description}>
                      {card.active && <p>{card.description}</p>}
                    </div>
                  </div>
                )
              })}
            </ul>
          </div>
          <div
            //         style={{
            //           background: `linear-gradient(
            //   175.85deg,
            //   #ffffff 2.04%,
            //   rgba(255, 255, 255, 0) 35.91%,
            //   rgba(255, 255, 255, 0.242634) 75.83%,
            //   #ffffff 96.48%
            // ),
            // linear-gradient(
            //   268.5deg,
            //   #ffffff 4.94%,
            //   rgba(255, 255, 255, 0) 34.92%,
            //   rgba(255, 255, 255, 0.242634) 78.28%,
            //   #ffffff 100.98%
            // ),
            // url(${clickedCard?.img})`,
            //         }}
            className={classes['right-side']}
          >
            <img src={clickedCard?.img} alt="" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Cards
