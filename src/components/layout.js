import React from 'react'

import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import * as layoutStyles from './layout.module.scss'

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        <div className={layoutStyles.site}>{props.children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
