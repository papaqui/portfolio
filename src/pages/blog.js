import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

import blogStyles from './blog.module.scss'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "DD.MM.YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <p className={blogStyles.blogDescription}>
        A carefully curated content about technology, podcasts, book
        recomendations and my journey as a developer.
      </p>

      <div className={blogStyles.blogPosts}>
        <h2>Blog posts</h2>
        <ol className={blogStyles.blogPostsList}>
          {data.allContentfulBlogPost.edges.map(edge => (
            <li className={blogStyles.blogPostItem}>
              <Link
                className={blogStyles.blogPostTitle}
                to={`/blog/${edge.node.slug}`}
              >
                <h3>{edge.node.title}</h3>
              </Link>
              <h4>{edge.node.publishedDate}</h4>
              <p>{edge.node.excerpt}</p>

              <Link to={`/blog/${edge.node.slug}`}>Read more</Link>
            </li>
          ))}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogPage
