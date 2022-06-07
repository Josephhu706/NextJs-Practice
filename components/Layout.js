import React from 'react'
import Nav from './Nav'
import Meta from './Meta'
import Header from './Header'
import styles from '../styles/Layout.module.css'
//we want this layout to wrap around our pages so we pass them into layout
//we pass in children as props into layout and wrap our children wth the styles
const Layout = ({children}) => {
  return (
    <>
      <Meta/>
        <Nav/>
        <div className={styles.container}>
            <main className={styles.main}>
                {/* pass in children as props which includes the about page */}
                <Header/>
                {children}
            </main>
        </div>
    </>
  )
}

export default Layout