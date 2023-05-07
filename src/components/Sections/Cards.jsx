import { useEffect, useState } from 'react'
import { cards as data } from '../../data/cards'
import Container from '../UI/Container'
import classes from './Cards.module.css'

const Cards = () => {
  const [cards, setCards] = useState(data)
  const [clickedCard, setClickedCard] = useState(data[0])
  const [mediaMatches, setMediaMatches] = useState(false)

  let media = window.matchMedia('(max-width: 760px)')

  const onClickHandler = (e, index) => {
    setCards(
      cards.map((card, i) => {
        if (card.active && i !== index) return { ...card, active: false }
        if (i === index) return { ...card, active: true }
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
    if (media.matches) {
      setMediaMatches(true)
    } else {
      setMediaMatches(false)
    }

    window.addEventListener('resize', () => {
      if (media.matches) {
        setMediaMatches(true)
      } else {
        setMediaMatches(false)
      }
    })
  }, [])

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
                      onClick={e => {
                        onClickHandler(e, i)
                      }}
                    >
                      <h3>{card.title}</h3>
                    </li>
                    <div className={classes.description}>
                      {card.active && <p>{card.description}</p>}
                      {mediaMatches && card.active && (
                        <div className={classes['right-side']}>
                          <img src={clickedCard?.img} alt="" />
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </ul>
          </div>
          {mediaMatches || (
            <div className={classes['right-side']}>
              <img src={clickedCard?.img} alt="" />
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}

export default Cards
