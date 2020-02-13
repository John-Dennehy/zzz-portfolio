import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import SocialLink from './SocialLink'

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
    }`
  )

  return (
    <div className="links-bar level is-mobile">
      {data.allDatoCmsSocialLink.edges.map(({ node: link }) => (
        <div className='circle level-item'>
          <SocialLink linkType={link.linkType} url={link.url} />
        </div>
      ))}
    </div>
  )
}