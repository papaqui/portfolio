import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const iconLink = <FontAwesomeIcon icon={faExternalLinkAlt} />

const Work = () => {
  return (
    <Layout>
      <SEO title="Tic Tac Toe Vanilla JS" />
      <h1>Tic Tac Toe</h1>
      <h2>Vanilla Javascript</h2>
      <a
        href="https://admin.fernandopapaqui.dev/projects/tic-tac-toe/"
        target="_blank"
        rel="noreferrer"
      >
        {iconLink}
      </a>
    </Layout>
  )
}

export default Work
