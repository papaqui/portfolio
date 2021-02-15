import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import layoutStyles from '../components/layout.module.scss'
import blogStyles from './blog.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'

import ProfilePhoto from '../img/Fernando_Papaqui_profile_photo.jpg'
import javaScriptLogo from '../img/javascript.svg'
import gatsbyLogo from '../img/gatsby.svg'
import netlifyLogo from '../img/netlify.svg'

const iconTwitter = <FontAwesomeIcon icon={faTwitter} />
const iconGithub = <FontAwesomeIcon icon={faGithub} />
const iconLinkedin = <FontAwesomeIcon icon={faLinkedinIn} />

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allWpPost {
        edges {
          node {
            title
            date(formatString: "DD.MM.YYYY")
            excerpt
            slug
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
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
              href="https://github.com/papaqui/portfolio"
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

      <div className={blogStyles.projectsPosts}>
        <h2>Projects</h2>
        <ol className={blogStyles.projectsPostsList}>
          <li className={blogStyles.projectsPostItem}>
            <h3>
              <Link to="/">
                <span role="img" aria-label="floppy">
                  💾
                </span>{' '}
                (This) Personal Porfolio
              </Link>
            </h3>
            <p>
              Made with Gatsby, deployed with Netlify, using Contentful CMS with
              GraphQL and styles on SCSS.
            </p>
            <div>
              <ul className={blogStyles.projectsStack}>
                <li className={blogStyles.projectsStackItem}>
                  <span>Gatsby</span>
                </li>
                <li className={blogStyles.projectsStackItem}>
                  <span>React</span>
                </li>
                <li className={blogStyles.projectsStackItem}>
                  <span>Netlify</span>
                </li>
                <li className={blogStyles.projectsStackItem}>
                  <span>GraphQL</span>
                </li>
              </ul>
            </div>
          </li>
          <li className={blogStyles.projectsPostItem}>
            <h3>
              <a
                href="https://www.drpapaqui.com.mx/calculadora-de-frecuencia-cardiaca-maxima/"
                target="_blank"
                rel="noreferrer"
              >
                <span role="img" aria-label="heart">
                  ❤
                </span>{' '}
                Heart Rate Calculator
              </a>
            </h3>
            <p>
              Vanilla JS web app to calculate max and min heart rate for sports
              and proper training.
            </p>
            <div>
              <ul className={blogStyles.projectsStack}>
                <li className={blogStyles.projectsStackItem}>
                  <span>Javascript</span>
                </li>
                <li className={blogStyles.projectsStackItem}>
                  <span>WordPress</span>
                </li>
                <li className={blogStyles.projectsStackItem}>
                  <span>Bootstrap</span>
                </li>
              </ul>
            </div>
          </li>
          <li className={blogStyles.projectsPostItem}>
            <h3>
              <a
                href="https://www.drpapaqui.com.mx/calculadora-indice-de-masa-corporal/"
                target="_blank"
                rel="noreferrer"
              >
                <span role="img" aria-label="estetoscopio">
                  🩺
                </span>{' '}
                Body Mass Index Calculator
              </a>
            </h3>
            <p>
              Vanilla JS web app to calculate body mass index and get a balanced
              diet.
            </p>
            <div>
              <ul className={blogStyles.projectsStack}>
                <li className={blogStyles.projectsStackItem}>
                  <span>Javascript</span>
                </li>
                <li className={blogStyles.projectsStackItem}>
                  <span>WordPress</span>
                </li>
                <li className={blogStyles.projectsStackItem}>
                  <span>Bootstrap</span>
                </li>
              </ul>
            </div>
          </li>
        </ol>
      </div>

      <div className={blogStyles.blogPosts}>
        <h2>Blog posts</h2>
        <ol className={blogStyles.blogPostsList}>
          {data.allWpPost.edges.slice(0, 4).map(edge => (
            <li className={blogStyles.blogPostItem}>
              <h3>{edge.node.title}</h3>
              <h4 className={blogStyles.blogPostDate}>{edge.node.date}</h4>
              <div
                className={blogStyles.blogExcerpt}
                dangerouslySetInnerHTML={{
                  __html: edge.node.excerpt.slice(0, 100) + ' [...]',
                }}
              />
              <Link
                className={blogStyles.blogLink}
                to={`/blog/${edge.node.slug}`}
              >
                Read more
              </Link>
            </li>
          ))}
        </ol>
        <div className={layoutStyles.btnContainer}>
          <Link to="/blog" className={layoutStyles.btn}>
            Read more posts
          </Link>
        </div>
      </div>

      <div className={blogStyles.contactHome}>
        <h2>Contact me</h2>
        <p>
          Let's connect and talk about tech, projects, nature, music or anything
          else.
        </p>
        <div className={blogStyles.profileHome}>
          <div className={blogStyles.profilePic}>
            <img src={ProfilePhoto} alt="Fernando Papaqui Profile" />
          </div>
          <div className={blogStyles.profileInfo}>
            <h3>Fernando Papaqui</h3>
            <a
              className={blogStyles.profileEmail}
              href="mailto:hola@rivaslevi.mx"
            >
              hola@rivaslevi.mx
            </a>
            <ul className={blogStyles.profileSocials}>
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
                  href="https://github.com/papaqui/portfolio"
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
        </div>

        <div className={blogStyles.madeWith}>
          <div className={blogStyles.madeWithModule}>
            <p>Site made with</p>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              <img src={javaScriptLogo} alt="JavaScript" />
            </a>
            <a
              href="https://www.gatsbyjs.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={gatsbyLogo} alt="Gatsby.js" />
            </a>
          </div>

          <p>Deployed with</p>
          <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
            <img src={netlifyLogo} alt="Netlify" />
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
