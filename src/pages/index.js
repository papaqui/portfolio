import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'

import layoutStyles from '../components/layout.module.scss'
import blogStyles from './blog.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'

const iconTwitter = <FontAwesomeIcon icon={faTwitter} />
const iconGithub = <FontAwesomeIcon icon={faGithub} />
const iconLinkedin = <FontAwesomeIcon icon={faLinkedinIn} />

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className={blogStyles.headerHome}>
        <h2>Hola! I'm</h2>
        <h1>Fernando Papaqui</h1>
        <h3>I'm a Front-end web developer from Mexico.</h3>
        <p>
          I have a deep interest in creating light and fast websites using
          Gatsby, JS, React, and when necessary, WordPress custom themes.
        </p>

        <ul className={blogStyles.homeSocials}>
          <li>
            <a
              className={blogStyles.homeSocialsItem}
              href="https://twitter.com/papaqui_dev"
              target="_blank"
              rel="noreferrer"
            >
              {iconTwitter} Twitter
            </a>
          </li>
          <li>
            <a
              className={blogStyles.homeSocialsItem}
              href="https://github.com/papaqui"
              target="_blank"
              rel="noreferrer"
            >
              {iconGithub} Github
            </a>
          </li>
          <li>
            <a
              className={blogStyles.homeSocialsItem}
              href="https://www.linkedin.com/in/fernandopapaqui/"
              target="_blank"
              rel="noreferrer"
            >
              {iconLinkedin} LinkedIn
            </a>
          </li>
        </ul>
      </div>

      <div className={blogStyles.blogPosts}>
        <h2>Projects</h2>
        <ol className={blogStyles.blogPostsList}>
          <li className={blogStyles.blogPostItem}>
            <h3>Calculadora de Frecuencia Cardiaca Máxima</h3>
            <h4>Javascript, HTML, CSS</h4>
            <p></p>
            Read more
          </li>
        </ol>
      </div>

      <div className={blogStyles.blogPosts}>
        <h2>Blog posts</h2>
        <ol className={blogStyles.blogPostsList}>
          {data.allMarkdownRemark.edges.slice(0, 4).map(edge => (
            <li className={blogStyles.blogPostItem}>
              <Link
                className={blogStyles.blogPostTitle}
                to={`/blog/${edge.node.fields.slug}`}
              >
                <h3>{edge.node.frontmatter.title}</h3>
              </Link>
              <h4>{edge.node.frontmatter.date}</h4>
              <p>{edge.node.excerpt}</p>
              <Link to={`/blog/${edge.node.fields.slug}`}>Read more</Link>
            </li>
          ))}
        </ol>
        <div className={layoutStyles.btnContainer}>
          <Link to="/blog" className={layoutStyles.btn}>
            Read more posts
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
