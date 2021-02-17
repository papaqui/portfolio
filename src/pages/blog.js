import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import blogStyles from './blog.module.scss'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allWpPost {
        edges {
          node {
            title
            date(formatString: "DD.MM.YYYY")
            excerpt
            slug
            categories {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      <p className={blogStyles.blogDescription}>
        A carefully curated content about technology, podcasts, book
        recomendations and my journey as a developer.
      </p>

      <div className={blogStyles.blogPosts}>
        <h2>Blog posts</h2>
        <ol className={blogStyles.blogPostsList}>
          {data.allWpPost.edges.map(edge => (
            <li className={blogStyles.blogPostItem}>
              <p className={blogStyles.blogCategory}>
                {edge.node.categories.nodes.map(cat => (
                  <span className={blogStyles.tagCategory}>{cat.name}</span>
                ))}
              </p>
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
      </div>
    </Layout>
  )
}

export default BlogPage
