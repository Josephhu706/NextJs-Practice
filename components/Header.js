import React from 'react'
import headerStyles from '../styles/Header.module.css'
//this will be on every page because we are passing it into layout
const Header = () => {
    // const x = 2
  return (
    <div>
        <h1 className={headerStyles.title}>
            <span>WebDev</span> News
        </h1>
        {/* you can put styles straight into the html as jsx */}
        {/* it allows you do do conditional css like this */}
        {/* <style jsx>
            {`
            .title{
                color: ${x>3?'red': 'blue'}
            }
            `}
        </style> */}
        <p className={headerStyles.description}>Keep up to date with the latest web dev news</p>
    </div>
  )
}

export default Header