// import classes from './Breadcrumb.module.css'
import { Link, useLocation } from 'react-router-dom'
import classes from './Breadcrumb.module.css'

const Breadcrumb = () => {
  const location = useLocation()

  // Split the URL path into individual segments
  const segments = location.pathname
    .split('/')
    .filter(s => s !== '')
    .map(item => {
      if (item.includes(':')) {
        return item.replace(':', '')
      }
      return item
    })

  // Build an array of breadcrumb items from the URL segments
  const items = segments.map((s, i) => {
    const link = `/${segments.slice(0, i + 1).join('/')}`
    const label = s.charAt(0).toUpperCase() + s.slice(1) // Capitalize the first letter of the segment
    const active = i === segments.length - 1
    return { label, link, active }
  })

  return (
    <nav aria-label="breadcrumb">
      <ol className={classes.breadcrumb}>
        <li>
          <Link to="/">Početna</Link>/
        </li>
        {items.map((item, index) => (
          <li
            key={index}
            className={`breadcrumb-item ${item.active ? classes.active : ''}`}
          >
            {item.active ? (
              item.label
            ) : (
              <Link to={item.link}>{item.label}</Link>
            )}
            {items.length > 1 && index !== items.length - 1 && '/ '}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumb
