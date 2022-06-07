import React from 'react'
import navStyles from '../styles/Nav.module.css'
import Link from 'next/link'
//this is a reusable wrapper componenent that we will bring into our layout
//we want every page to have the nav bar
//Link is the routing system for nextjs it's just an a tag
const Nav = () => {
  return (
    <nav className={navStyles.nav}>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
        </ul>

    </nav>
  )
}

export default Nav