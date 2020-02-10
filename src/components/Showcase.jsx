import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import ProjectCard from './ProjectCard'

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
              fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
                ...GatsbyDatoCmsSizes
              }
            }
          }
        }
      }
    }`
  )

  return (

    <>
      <div className="section card">
        <h1 className='title'>Highlighted Projects</h1>
        <Masonry className="container showcase">
          {data.allDatoCmsProject.edges.map(({ node: project }) => (
            <ProjectCard
              id={project.id}
              slug={project.slug}
              coverImage={project.coverImage}
              title={project.title}
              excerpt={project.excerpt}
            />
          ))}
        </Masonry>
      </div>
    </>

  )
}