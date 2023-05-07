import React from 'react'

import classes from './Hamburger.module.css'

const Hamburger = () => {
  return (
    <div className={classes.hamburger}>
      <svg
        stroke="var(--secondary-clr)"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        width="250"
      >
        <line
          className={`${classes.line} ${classes.top}`}
          x1="15"
          x2="85"
          y1="30"
          y2="30"
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
          y1="70"
          y2="70"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="45"
          strokeDashoffset="0"
        ></line>
      </svg>
    </div>
  )
}

export default Hamburger
