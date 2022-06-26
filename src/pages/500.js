import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const InternalErrorPage = () => (
  <Layout>
    <Seo title="500: Internal Server Error" />
    <h1>500: Internal Server Error!!!</h1>
    <p>You just error something. Best!</p>
  </Layout>
)

export default InternalErrorPage
