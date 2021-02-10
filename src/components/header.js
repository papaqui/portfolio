import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import headerStyles from './header.module.scss'

import ProfilePhoto from '../img/Fernando_Papaqui_profile_photo.jpg'

const Header = () => {
  // Create a variable to store the data we're fetching from the graphql api
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <div>
        <img src={ProfilePhoto} alt="Fernando Papaqui" />
        <h2>
          <Link className={headerStyles.title} to="/">
            {/* Inyect the value from graphql */}
            {data.site.siteMetadata.title}
          </Link>
        </h2>
      </div>
      <div>
        <nav>
          <ul className={headerStyles.navList}>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/about"
              >
                About me
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/blog"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
