import * as React from "react"
import { Link, graphql } from "gatsby"
import { IndexHogeQuery } from "../../types/graphql-types"
import Header from "../components/Header"
import CatchHero from "../components/CatchHero"
import BlogSection from "../components/BlogSection"
// ______________________________________________________
//
type Props = {
  data: IndexHogeQuery
}
// ______________________________________________________
//
const Component: React.FC<Props> = ({ data }) => (
  <>
    <Header />
    <CatchHero />
    <BlogSection />
  </>
)
// ______________________________________________________
//
export const pageQuery = graphql`
  query IndexHoge {
    site {
      siteMetadata {
        title
      }
    }
  }
`
// ______________________________________________________
//
export default Component
