import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'

const BlogPost = ({ data: { mdx: { body, frontmatter: { date, title } } } }) => {
  return (
    <Layout pageTitle={title}>
      <p>{date}</p>
      <MDXRenderer>
        {body}
      </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`

export default BlogPost