import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <div className={footerStyles.footer}>
      <ul className={footerStyles.footerSocials}>
        <li>
          <a
            className={footerStyles.footerItem}
            href="https://twitter.com/papaqui_dev"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            className={footerStyles.footerItem}
            href="https://github.com/papaqui"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            className={footerStyles.footerItem}
            href="https://www.linkedin.com/in/fernandopapaqui/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
      <p className={footerStyles.text}>
        Hecho en México | © {new Date().getFullYear()}{' '}
        {data.site.siteMetadata.author}
      </p>
    </div>
  )
}

export default Footer
