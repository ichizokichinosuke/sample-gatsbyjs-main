import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const RedirectDestinationPage = () => (
  <Layout>
    <Seo title="Redirect Destination Page" />
    <h1>Hi from the Redirect Destination Page</h1>
    <p>Welcome to this page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default RedirectDestinationPage
