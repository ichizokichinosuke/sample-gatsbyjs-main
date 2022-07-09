import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const AboutIndexPage = () => (
  <Layout>
    <Seo title="About Index Page" />
    <h1>Hi from the /about/index.js</h1>
    <p>Welcome to this page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutIndexPage
