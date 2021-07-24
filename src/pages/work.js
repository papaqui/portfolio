import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import * as blogStyles from './blog.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const iconLink = <FontAwesomeIcon icon={faExternalLinkAlt} />

const Work = () => {
  return (
    <Layout>
      <SEO title="Work" />
      <h1>Archive</h1>
      <p>
        Other projects I've done to learn and to have fun, as well as live sites
        from actual customers.
      </p>

      <ul className={blogStyles.archiveList}>
        {/* BARBARENAS */}
        <li className={blogStyles.projectsPostItem}>
          <h3>Online Booking: Barbarenas</h3>
          <p>
            This is an ongoing project to create an online booking system based
            on a custom theme in WordPress for a german business in the
            beautiful beach of Puerto Escondido, Mexico.
          </p>
          <p>
            This project uses a combination of a custom theme, custom post types
            for events and activities, custom fields to allow customer
            customization, integration with Stripe and PayPal, multilanguage
            support and an online booking platform that links to iCal calendars
            like Airbnb and Booking.com
          </p>
          <div>
            <ul className={blogStyles.projectsStack}>
              <li className={blogStyles.projectsStackItem}>
                <span>WordPress</span>
              </li>
              <li className={blogStyles.projectsStackItem}>
                <span>Custom Post Types</span>
              </li>
              <li className={blogStyles.projectsStackItem}>
                <span>PHP</span>
              </li>
              <li className={blogStyles.projectsStackItem}>
                <span>JS</span>
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
            href="http://www.fernandop39.sg-host.com/"
            target="_blank"
            rel="noreferrer"
          >
            {iconLink}
          </a>
        </li>
        {/* JOHNSON PROFESIONAL */}
        <li className={blogStyles.projectsPostItem}>
          <h3>Online Store: Diversey Distributor, Mexico</h3>
          <p>
            This is an ongoing project to migrate from the actual{' '}
            <a
              href="https://www.johnsonprofesional.com/"
              target="_blank"
              rel="noreferrer"
            >
              static HTML website
            </a>
            &nbsp;to an eCommerce solution built with a custom WordPress theme
            using WooCommerce. The customer is an authorized distributor of the
            American brand Diversey, and since 2020 events online traffic grew
            rapidly thanks to good practices in SEO setup in the actual site.
          </p>
          <p>
            This new project is raw and unfinished, but here is the link to keep
            track on the progress, as well as for the customer to review and to
            give feedback.
          </p>
          <div>
            <ul className={blogStyles.projectsStack}>
              <li className={blogStyles.projectsStackItem}>
                <span>WordPress</span>
              </li>
              <li className={blogStyles.projectsStackItem}>
                <span>WooCommerce</span>
              </li>
              <li className={blogStyles.projectsStackItem}>
                <span>PHP</span>
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
            href="http://johnsonprofesional.com/demo"
            target="_blank"
            rel="noreferrer"
          >
            {iconLink}
          </a>
        </li>
        {/* BEE YOGI */}
        <li className={blogStyles.projectsPostItem}>
          <h3>Custom Theme: Bee Yogi</h3>
          <p>
            Custom WordPress theme build for Bee Yogi, a yoga teacher in
            Bavaria, Germany.
          </p>
          <div>
            <ul className={blogStyles.projectsStack}>
              <li className={blogStyles.projectsStackItem}>
                <span>WordPress</span>
              </li>
              <li className={blogStyles.projectsStackItem}>
                <span>PHP</span>
              </li>
              <li className={blogStyles.projectsStackItem}>
                <span>HTML</span>
              </li>
              <li className={blogStyles.projectsStackItem}>
                <span>CSS</span>
              </li>
            </ul>
          </div>
          <a href="https://www.beeyogi.de/" target="_blank" rel="noreferrer">
            {iconLink}
          </a>
        </li>
        {/* TIC TAC TOE */}
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
