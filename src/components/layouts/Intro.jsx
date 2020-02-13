import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default () => {

  const data = useStaticQuery(graphql`
  query IntroQuery {
    datoCmsHome {
      introTitle
      introTextNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
  `)

  const title = data.datoCmsHome.introTitle

  return (
    <div className="container intro">
      <h1 className="title">
        {title}
      </h1>
      <div className="sub-title" dangerouslySetInnerHTML={{
        __html:
          data.datoCmsHome.introTextNode.childMarkdownRemark.html,
      }}>
      </div>
    </div>
  )
}