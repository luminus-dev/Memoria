import * as React from "react"
import { css } from "@emotion/core"
import { colors, fontFamily, media } from "../styles/variables"

const section = css`
  width: 100%;
  margin: 128px auto 64px;
  padding: 12px 16px;
  ${media.tablet} {
    padding: 12px 64px;
  }
`
const sectionTitle = css`
  font-size: 32px;
  letter-spacing: 0.1em;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  font-family: ${fontFamily.catch};
  ${media.desktop} {
    font-size: 64px;
    letter-spacing: 0.072em;
  }
`

const WorksSection: React.FC = () => {
  const test = "ok"

  return (
    <>
      <section css={section}>
        <h2 css={sectionTitle}>Works</h2>
      </section>
    </>
  )
}

export default WorksSection
