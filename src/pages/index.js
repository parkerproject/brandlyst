import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="center">
        <h1 className="logo">Brandlyst</h1>
        <p>Organize all your brand assets from one beautiful dashboard.</p>
      </div>
  </Layout>
)

export default IndexPage
