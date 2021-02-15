import React from 'react'
import { graphql } from 'gatsby'
import layoutStyles from './layout.module.scss'

export const AuthorFragment = graphql`
  fragment AuthorBio on WpUser {
    id
    name
    description
  }
`
const AuthorBio = ({ author: { id, name, description } }) => {
  return (
    // <div className={`author-${id}`}>
    <div className={layoutStyles.authorSection}>
      <h2 className={layoutStyles.authorName}>{name}</h2>
      <div
        className={layoutStyles.authorDescription}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  )
}

export default AuthorBio
