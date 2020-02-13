import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import ShowcaseCard from './ProjectCard'

export default () => {

  const data = useStaticQuery(graphql`
    query AllProjectsQuery {
      allDatoCmsProject(
          sort: { fields: [position], order: ASC },
          filter: {showcase: {eq: true}}
      ) {
      edges {
        node {
          id
          title
          slug
          excerpt
          coverImage {
            fluid(maxWidth: 200, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes_tracedSVG
              }
            }
          }
        }
      }
    }`
  )

  return (
    <>
      <div className="section">
        <div className="showcase">
          <h1 className='title'>Highlighted Projects</h1>
          <Masonry className="container">
            {data.allDatoCmsProject.edges.map(({ node: project }) => (
              <ShowcaseCard
                id={project.id}
                slug={project.slug}
                coverImage={project.coverImage}
                title={project.title}
                excerpt={project.excerpt}
              />
            ))}
          </Masonry>

        </div>
      </div>
    </>

  )
}