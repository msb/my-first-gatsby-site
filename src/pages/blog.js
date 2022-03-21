import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({ data: { allFile: { nodes: names } } }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
      {
        names.map(({ name }) => (
          <li key={name}>{name}</li>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export default BlogPage