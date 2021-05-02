import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About Me" />
      <h1>Hi from about page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, reprehenderit doloribus
         inventore possimus ipsum quae molestias assumenda molestiae. Temporibus neque maiores consequatur sint rem, voluptates repellendus explicabo nobis nihil impedit.</p>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
