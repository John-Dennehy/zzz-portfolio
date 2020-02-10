import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default () => {

  const data = useStaticQuery(graphql`
  query SocialLinksQuery {
    allDatoCmsSocialLink(sort: {fields: [position], order: ASC}) {
      edges {
        node {
          linkType
          url
        }
      }
    }
  }
`)

  return (
    <p className="sidebar__social">
      {data.allDatoCmsSocialLink.edges.map(({ node: link }) => (
        <a
          key={link.linkType}
          href={link.url}
          target="blank"
          className={`social social--${link.linkType.toLowerCase()}`}
        >
          {' '}
        </a>
      ))}
    </p>
  )
}