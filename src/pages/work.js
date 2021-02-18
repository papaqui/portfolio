import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import blogStyles from './blog.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const iconLink = <FontAwesomeIcon icon={faExternalLinkAlt} />

const Work = () => {
  return (
    <Layout>
      <SEO title="Work" />
      <h1>Archive</h1>
      <p>Other projects I've done to learn and to have fun.</p>

      <ul className={blogStyles.archiveList}>
        <li className={blogStyles.projectsPostItem}>
          <h3>Tic Tac Toe</h3>
          <p>
            Vanilla JavaScript. Based on the tutorial made by{' '}
            <a
              href="https://youtu.be/Y-GkMjUZsmM"
              target="_blank"
              rel="noreferrer"
            >
              Web Dev Simplified
            </a>
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
          <a
            href="https://admin.fernandopapaqui.dev/projects/tic-tac-toe/"
            target="_blank"
            rel="noreferrer"
          >
            {iconLink}
          </a>
        </li>
        <li className={blogStyles.projectsPostItem}>
          <h3>Pig Game</h3>
          <p>
            Vanilla JavaScript. Part of the bootcamp made by{' '}
            <a
              href="https://www.udemy.com/share/101WfeAEAccl5QQn4=/"
              target="_blank"
              rel="noreferrer"
            >
              Jonas Schmedtmann
            </a>
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
          <a
            href="https://admin.fernandopapaqui.dev/projects/pig-game/"
            target="_blank"
            rel="noreferrer"
          >
            {iconLink}
          </a>
        </li>
        <li className={blogStyles.projectsPostItem}>
          <h3>Guess my number</h3>
          <p>
            Vanilla JavaScript. Part of the bootcamp made by{' '}
            <a
              href="https://www.udemy.com/share/101WfeAEAccl5QQn4=/"
              target="_blank"
              rel="noreferrer"
            >
              Jonas Schmedtmann
            </a>
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
          <a
            href="https://admin.fernandopapaqui.dev/projects/guess-my-number/"
            target="_blank"
            rel="noreferrer"
          >
            {iconLink}
          </a>
        </li>
      </ul>
    </Layout>
  )
}

export default Work
