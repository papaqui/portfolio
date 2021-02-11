import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(
        props.data.contentfulBlogPost.body.json,
        options
      )}
    </Layout>
  )
}

export default Blog

// MODERN VERSION WORKING, THIS ONE GETS TOP IMAGE ONLY
// import React from 'react'
// import { graphql, useStaticQuery } from 'gatsby'

// import Layout from '../components/layout'

// const Blog = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       allContentfulBlogPost {
//         edges {
//           node {
//             postImage {
//               title
//               resize(width: 1140, height: 550) {
//                 src
//               }
//             }
//           }
//         }
//       }
//     }
//   `)
//   console.log(data)
//   return (
//     <Layout>
//       <img
//         src={data.allContentfulBlogPost.edges[0].node.postImage.resize.src}
//         alt="Temp"
//       />
//     </Layout>
//   )
// }

// export default Blog
