import * as React from "react"
import { css } from "@emotion/core"
import { media } from "../styles/variables"

const header = css`
  display: flex;
  width: 100%;
  margin: 0 auto 64px;
  padding: 12px 16px;
  align-items: center;
  ${media.tablet} {
    padding: 12px 64px;
  }
`
const mainTitle = css`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`

const Header: React.FC = () => (
  <header css={header}>
    <h1 css={mainTitle}>Memoria</h1>
  </header>
)

export default Header
