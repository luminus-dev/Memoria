import * as React from "react"
import { css } from "@emotion/core"
import { colors, fontFamily, media } from "../styles/variables"

const section = css`
  width: 100%;
  margin: 96px auto;
  padding: 0 32px;
  ${media.tablet} {
    padding: 0 64px;
  }
`
const sectionTitle = css`
  font-size: 32px;
  margin-bottom: 24px;
  letter-spacing: 0.1em;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  font-family: ${fontFamily.catch};
  ${media.desktop} {
    font-size: 64px;
    margin-bottom: 32px;
    letter-spacing: 0.072em;
  }
`
const articles = css`
  --column-count: 1;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(var(--column-count), 1fr);
  grid-gap: 48px;
  list-style: none;
  ${media.tablet} {
    --column-count: 2;
  }
  ${media.desktop} {
    --column-count: 3;
  }
`
const articleCard = css`
  width: 100%;
`
const articleTitle = css`
  font-size: 24px;
  margin: 16px 0 8px 0;
  line-height: 1.5;
`
const articleDescription = css`
  font-size: 16px;
  margin-bottom: 8px;
  line-height: 1.75;
  font-weight: 700;
`

const BlogSection: React.FC = () => {
  const articleCount = 14

  return (
    <>
      <section css={section}>
        <h2 css={sectionTitle}>BLOG</h2>
        <ul css={articles}>
          {[...Array(articleCount)].map((_, index) => (
            <li css={articleCard} key={index}>
              <section>
                <img src="/images/momoria-thum.png" alt="サムネイル" />
                <h3 css={articleTitle}>ブログタイトル{index}</h3>
                <p css={articleDescription}>説明をする。説明をする。</p>
                <p>2020-XX-XX</p>
                <p>タグ / タグ</p>
              </section>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default BlogSection
