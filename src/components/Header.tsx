import * as React from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { colors, fontFamily, media } from "../styles/variables"

const header = css`
  display: flex;
  width: 100%;
  margin: 0 auto 82px;
  padding: 12px 16px;
  align-items: center;
  ${media.tablet} {
    padding: 12px 64px;
  }
`
const Logo = css`
  font-size: 24px;
  font-weight: 700;
  font-family: ${fontFamily.catch};
  letter-spacing: 0.05em;
  text-transform: uppercase;
`
const LogoLink = css`
  color: ${colors.black};
`

const Header: React.FC = () => (
  <header css={header}>
    <motion.h1 css={Logo} whileTap={{ scale: 0.9 }}>
      <Link to="/" css={LogoLink}>
        Memoria
      </Link>
    </motion.h1>
  </header>
)

export default Header
