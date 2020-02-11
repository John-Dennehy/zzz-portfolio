import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

export default (props) => {
  return (
    <div key={props.id} className="showcase__item">
      <div className="project-card card">
        <figure>
          <Link to={`/projects/${props.slug}`} className="card__image">
            <Img fluid={props.coverImage.fluid} />
          </Link>
          <figcaption className="card__caption">
            <h6 className="card__title">
              <Link to={`/projects/${props.slug}`}>{props.title}</Link>
            </h6>
            <div className="card__description">
              <p>{props.excerpt}</p>
            </div>
          </figcaption>
        </figure>

      </div>
    </div>
  )
}