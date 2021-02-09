import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'

import layoutStyles from '../components/layout.module.scss'
import blogStyles from './blog.module.scss'

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
      <h1>Fernando Papaqui</h1>
      <h2>Front-end web developer from Mexico.</h2>
      <p>
        <Link to="/about">Read more</Link>
      </p>

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
