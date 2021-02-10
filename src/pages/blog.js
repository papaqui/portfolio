import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'

const BlogPage = () => {
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
      <h1>Blog</h1>
      <p className={blogStyles.blogDescription}>
        A carefully curated content about technology, podcasts, book
        recomendations and my journey as a developer.
      </p>

      <div className={blogStyles.blogPosts}>
        <h2>Blog posts</h2>
        <ol className={blogStyles.blogPostsList}>
          {data.allMarkdownRemark.edges.map(edge => (
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
      </div>
    </Layout>
  )
}

export default BlogPage
