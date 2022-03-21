import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

const BlogPage = ({ data: { allMdx: { nodes: posts } } }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {
        posts.map(({ id, frontmatter: { title, date }, body }) => (
          <article key={id}>
            <h2>{title}</h2>
            <p>Posted: {date}</p>
            <MDXRenderer>
              {body}
            </MDXRenderer>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "D MMMM YYYY")
          title
        }
        id
        body
      }
    }
  }
`

export default BlogPage