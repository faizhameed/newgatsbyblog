import React from "react"
import { graphql,Link } from "gatsby"
import styled from 'styled-components';
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
text-decoration:none;
`
const BlogTitle = styled.h3`
margin-bottom:20px;
color:blue;
`

export default({data}) => {

  return (
  <Layout>
    <SEO title="Home" />
    <div>
      Faiz Thought
    </div>
  {
      data.allMarkdownRemark.edges.map(({node})=>(
        <div key ={node.id}>
          <BlogLink to = {node.fields.slug  }>
          <BlogTitle>{node.frontmatter.title}</BlogTitle>

          </BlogLink>
          <p>{node.frontmatter.description}-{node.frontmatter.date}</p>
          <p>{node.excerpt}</p> 
        </div>)
      )
    }
   
  </Layout>

  )}


export const query = graphql`
query{
  allMarkdownRemark(sort:{fields:[frontmatter___date],order:DESC}) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          description
          title
          date
        }
        fields{
          slug
        }
        excerpt
        html
      }
    }
  }
}`
