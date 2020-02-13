import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

export default (props) => {

  const projectUrl = `/projects/${props.slug}`
  const image = () => {
    <Img fluid={props.coverImage.fluid} />
  }

  return (
    <div key={props.id} className="showcase__item">
      <div className="showcase-card">

        <div>
          <Link to={projectUrl} className="showcase__image">
            {image()}
          </Link>
          <div className="showcase__caption">
            <h6 className="showcase__title">
              <Link to={projectUrl}>{props.title}</Link>
            </h6>
            <div className="showcase__description">
              <p>{props.excerpt}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}