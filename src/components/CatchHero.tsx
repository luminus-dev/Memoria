import * as React from "react"
import { motion, useViewportScroll } from "framer-motion"
import { css } from "@emotion/core"
import { fontFamily, media } from "../styles/variables"

const CatchSection = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 28px 48px 28px;
  ${media.tablet} {
    margin: 0 64px 48px 64px;
  }
`
const CatchTitle = css`
  width: 100%;
  margin-bottom: 48px;
  font-size: 64px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
  line-height: 1.15;
  font-family: ${fontFamily.catch};
  ${media.tablet} {
    font-size: 96px;
  }
  ${media.desktop} {
    margin-bottom: 0;
    font-size: 11.24vw;
    max-width: 64%;
    text-align: left;
  }
`
const CatchDescription = css`
  margin: 0 auto;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.05em;
  line-height: 2;
  ${media.tablet} {
    font-size: 16px;
  }
  ${media.desktop} {
    max-width: 32%;
    margin: 1.24vw 0 0 0;
    font-size: 1.64vw;
    line-height: 1.8;
  }
`

const CatchHero: React.FC = () => {
  const { scrollYProgress } = useViewportScroll()
  console.log(scrollYProgress)

  return (
    <>
      <section css={CatchSection}>
        <motion.h2
          css={CatchTitle}
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50
          }}
        >
          UNDER DESIGN
        </motion.h2>
        <div css={CatchDescription}>
          フロントエンドエンジニアとしてやるべきことを果たすために、多様な知識や概念を知り成長していく記憶をここに残す
        </div>
      </section>
    </>
  )
}

export default CatchHero
