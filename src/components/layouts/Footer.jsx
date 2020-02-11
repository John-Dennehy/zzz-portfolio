import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const data = useStaticQuery(graphql`
  query FooterQuery {
    datoCmsHome(copyright: {}) {
      copyright
    }
  }
  `)

  return (

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          {data.datoCmsHome.copyright}
        </p>
      </div>
    </footer>
  )
}