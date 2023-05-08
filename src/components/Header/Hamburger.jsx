import React from 'react'
import { useState } from 'react'

import classes from './Hamburger.module.css'
import HamburgerMenu from './HamburgerMenu'

const Hamburger = () => {
  const [isOpened, setIsOpened] = useState(false)

  const onClickHandler = () => {
    setIsOpened(prev => !prev)
  }

  return (
    <button onClick={onClickHandler} className={classes.hamburger}>
      {isOpened ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="55"
            height="55"
            fill="var(--secondary-clr)"
            class="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
          <HamburgerMenu />
        </>
      ) : (
        <svg
          stroke="var(--secondary-clr)"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            className={`${classes.line} ${classes.top}`}
            x1="15"
            x2="85"
            y1="35"
            y2="35"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="80"
            strokeDashoffset="0"
          ></line>
          <line
            className={`${classes.line} ${classes.top}`}
            x1="15"
            x2="85"
            y1="50"
            y2="50"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="80"
            strokeDashoffset="0"
          ></line>
          <line
            className={`${classes.line} ${classes.bottom}`}
            x1="85"
            x2="15"
            y1="65"
            y2="65"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="45"
            strokeDashoffset="0"
          ></line>
        </svg>
      )}
    </button>
  )
}

export default Hamburger
