import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import * as footerStyles from './footer.module.scss'

import agave from '../images/agave.svg'

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
      <div className={footerStyles.footerMadeIn}>
        <img src={agave} alt="Agave" />
        <p>Hecho en México</p>
      </div>
      <p className={footerStyles.separator}>|</p>
      <div className={footerStyles.footerDate}>
        <p>
          © {new Date().getFullYear()} {data.site.siteMetadata.author}
        </p>
      </div>
    </div>
  )
}

export default Footer
