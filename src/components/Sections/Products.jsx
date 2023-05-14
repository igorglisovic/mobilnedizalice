import classes from './Products.module.css'
import Container from '../UI/Container'
import BreadCrumb from '../UI/Breadcrumb'
import { groups, products } from '../../data/products'
import { useEffect, useState } from 'react'
import Card from '../UI/Card'

const Products = () => {
  const [productsList, setProductsList] = useState(products)
  const [mediaMatches, setMediaMatches] = useState(false)
  const [isFiltered, setIsFiltered] = useState(false)
  const [selectedValue, setSelectedValue] = useState('kategorije')

  const onClickFilterHandler = e => {
    if (e.target.innerText === 'Obriši filtere' && isFiltered) {
      setProductsList(products)
      console.log(e.target.innerText)
      setSelectedValue('kategorije')
      setIsFiltered(false)
      return
    }

    setIsFiltered(true)

    setProductsList(
      products.filter(item => {
        if (item.group === e.target.innerText.slice(2)) {
          return item
        }
      })
    )
  }

  const onChangeFilterHandler = e => {
    if (e.target.value === 'kategorije') return

    setIsFiltered(true)

    setSelectedValue(e.target.value)

    setProductsList(
      products.filter(item => {
        if (item.group === e.target.value) {
          return item
        }
      })
    )
  }

  let media = window.matchMedia('(max-width: 840px)')

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
    <section className={`${classes.products} products`}>
      <Container>
        <div className={classes.wrapper}>
          {mediaMatches && (
            <div
              style={{
                marginTop: '7rem',
                textAlign: 'center',
                marginInline: 'auto',
              }}
            >
              <BreadCrumb />
              <h1>Proizvodi</h1>
            </div>
          )}
          {mediaMatches ? (
            <div className={classes['select-wrapper']}>
              <select
                onChange={onChangeFilterHandler}
                defaultValue="kategorije"
                value={selectedValue}
                name=""
                id=""
              >
                <option value="kategorije" disabled selected hidden>
                  Kategorije
                </option>
                {groups.map((group, i) => (
                  <option key={i}>{group}</option>
                ))}
              </select>
              {isFiltered && (
                <span onClick={e => onClickFilterHandler(e)}>
                  Obriši filtere
                </span>
              )}
            </div>
          ) : (
            <aside>
              <h3>Kategorije</h3>
              <ul className={classes.categories}>
                {groups.map((group, i) => (
                  <li onClick={e => onClickFilterHandler(e)} key={i}>
                    • {group}
                  </li>
                ))}
                {isFiltered && (
                  <li onClick={e => onClickFilterHandler(e)}>Obriši filtere</li>
                )}
              </ul>
            </aside>
          )}
          <div>
            {mediaMatches || (
              <>
                <BreadCrumb />
                <h1>Proizvodi</h1>
              </>
            )}

            <Card slider={false} list={productsList} />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Products
