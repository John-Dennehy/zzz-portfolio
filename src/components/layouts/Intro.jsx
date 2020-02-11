import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default () => {

  const data = useStaticQuery(graphql`
  query IntroQuery {
    datoCmsHome {
      introTextNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
  `)

  return (
    <div className="subtitle" dangerouslySetInnerHTML={{
      __html:
        data.datoCmsHome.introTextNode.childMarkdownRemark.html,
    }}>
    </div>
  )
}