import React from 'react'
import { graphql } from 'gatsby'

import AuthorBio from '../components/AuthorBio'
import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPost = ({ data }) => {
  const {
    wpPost: { title, content, id, author },
  } = data
  return (
    <Layout>
      <SEO title={title} />
      <div className={`post-${id}`}>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <AuthorBio author={author.node} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    wpPost(id: { eq: $id }) {
      id
      title
      content
      author {
        node {
          ...AuthorBio
        }
      }
    }
  }
`

export default BlogPost
