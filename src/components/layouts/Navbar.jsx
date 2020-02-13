import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import LinksBar from '../social/LinksBar'

export default () => {

  const data = useStaticQuery(graphql`
    query LogoQuery {
      datoCmsHome {
        logo: navbarLogo {
          fluid(maxWidth: 30) { ...GatsbyDatoCmsFluid_tracedSVG}
          alt
        }
      }
    }
  `)


  return (
    <header className="header level is-mobile " >
      <div className="level-left">
        <a className="logo" href="/">
          <img fluid={data.datoCmsHome.navbarLogo.fluid} alt={data.datoCmsHome.navbarLogo.alt} />
        </a>
      </div>
      <div className="level-right">
        <LinksBar />
      </div>
    </header>
  )
}