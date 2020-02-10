import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default () => {

  const data = useStaticQuery(graphql`
  query HeroQuery {
    datoCmsHome {
      introTextNode {
        childMarkdownRemark {
          html
        }
      }
      seoSettings {
        title
      }
    }
  }
  `)

  return (
    <>
      <section className="hero is-fullheight-with-navbar is-primary is-bold">
        <div className="hero-head">
          Head
        </div>
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Primary bold title
      </h1>
            <div className="subtitle" dangerouslySetInnerHTML={{
              __html:
                data.datoCmsHome.introTextNode.childMarkdownRemark.html,
            }}>
            </div>
          </div>
        </div>
        <div className="hero-foot">Foot</div>
      </section>

    </>
  )
}