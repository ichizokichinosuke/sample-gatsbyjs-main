import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const RaiseError = ({ serverData }) => {
  return (
    <Layout>
      <Seo title="Raise 500 error" />
      <h1>
        This page is <b>rendered server-side</b>
      </h1>
      <p>
        To learn more, head over to our{" "}
        <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/">
          documentation about Server Side Rendering
        </a>
        .
      </p>
      <p>
        {serverData.message}
      </p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default RaiseError

export async function getServerData() {
    try {
      const res = await fetch(`https://dog.ceo/api/breed/shiba/images/random`)
      if (!res.ok) {
        throw new Error(`Response failed`)
      }
      return {
        props: await res.json(),
      }
    } catch (error) {
      return {
        status: 500,
        headers: {},
        props: {},
      }
    }
  }
