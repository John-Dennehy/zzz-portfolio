import React from 'react'
import { graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Layout from '../components/layout'
import ProjectCard from '../components/projectCard'

const IndexPage = ({ data }) => (
  <Layout>
    <Masonry className="showcase">
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
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allDatoCmsProject(sort: { fields: [position], order: ASC }) {
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
  }
`
