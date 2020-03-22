import * as React from "react"
import { css } from "@emotion/core"
import { media } from "../styles/variables"

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
  font-family: "Avenir Next", Helvetica, Arial, sans-serif;
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
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.05em;
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

const CatchHero: React.FC = () => (
  <>
    <section css={CatchSection}>
      <h2 css={CatchTitle}>Under Design</h2>
      <div css={CatchDescription}>
        目先のことばかりを気にして考える時間はここまで
        <br />
        これより先は視野を広め、壁を見上げながらよじ登ろうじゃないか
        <br />
        クリエイティブな思考や面白い概念を知識として積み上げる
        <br />
        さぁ、誇りある自分と共に前を向いて走れ！
      </div>
    </section>
  </>
)

export default CatchHero
