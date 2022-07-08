import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const RedirectFromPage = () => (
  <Layout>
    <Seo title="Redirect From Page" />
    <h1>Hi from the Redirect from Page</h1>
    <p>Welcome to this page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default RedirectFromPage
