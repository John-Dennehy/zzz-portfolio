import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { HelmetDatoCms } from 'gatsby-source-datocms'

export const TemplateWrapper = ({ children }) => {

  const data = useStaticQuery(graphql`
    query LayoutQuery {
      datoCmsSite {
        globalSeo {
          siteName
        }
        faviconMetaTags {
          ...GatsbyDatoCmsFaviconMetaTags
        }
      }
      datoCmsHome {
        seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }

      }
    }
  `)

  return (
    <div >
      <HelmetDatoCms
        favicon={data.datoCmsSite.faviconMetaTags}
        seo={data.datoCmsHome.seoMetaTags}
      />

      <div className="container__body">

        {children}
      </div>
    </div>
  )
}


TemplateWrapper.propTypes = {
  children: PropTypes.object,
}

export default TemplateWrapper
