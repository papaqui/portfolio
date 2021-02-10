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

      <div className={blogStyles.projectsPosts}>
        <h2>Projects</h2>
        <ol className={blogStyles.projectsPostsList}>
          <li className={blogStyles.projectsPostItem}>
            <h3>
              <span role="img" aria-label="heart">
                ❤
              </span>{' '}
              Heart Rate Calculator
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
                  <span>HTML</span>
                </li>
                <li className={blogStyles.projectsStackItem}>
                  <span>CSS</span>
                </li>
              </ul>
            </div>
          </li>
          <li className={blogStyles.projectsPostItem}>
            <h3>
              <span role="img" aria-label="estetoscopio">
                🩺
              </span>{' '}
              BMI Calculator
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
                  <span>HTML</span>
                </li>
                <li className={blogStyles.projectsStackItem}>
                  <span>CSS</span>
                </li>
              </ul>
            </div>
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

      <div className={blogStyles.contactHome}>
        <h2>Contact me</h2>
        <p>
          Let's connect and talk about tech, projects, nature, music or anything
          else.
        </p>
        <div className={blogStyles.profileHome}>
          <div>
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
        </div>

        <div>
          <p>Site made with:</p>
          <img src={javaScriptLogo} alt="JavaScript" />
          <img src={gatsbyLogo} alt="Gatsby.js" />
          <p>Deployed with:</p>
          <img src={netlifyLogo} alt="Netlify" />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
