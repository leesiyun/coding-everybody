import Link from 'next/link'
import styled from 'styled-components'

import {
  Css,
  Eslint,
  Fontawesome,
  Gatsby,
  Html,
  Javascript,
  Nextjs,
  Notion,
  Styledcomponents,
  Typescript,
  Vue,
} from '@/assets/filterIcon'

const TagButton = ({tagName}) => {
  const getTagContent = tagName => {
    if (tagName === 'css')
      return (
        <>
          <Css className="icon css" />
          CSS
        </>
      )

    if (tagName === '\beslint')
      return (
        <>
          <Eslint className="icon eslint" />
          ESLint
        </>
      )

    if (tagName === 'font-awesome')
      return (
        <>
          <Fontawesome className="icon font-awesome" />
          FontAwesome
        </>
      )

    if (tagName === 'gatsby')
      return (
        <>
          <Gatsby className="icon gatsby" />
          Gatsby
        </>
      )

    if (tagName === 'html')
      return (
        <>
          <Html className="icon html" />
          HTML
        </>
      )

    if (tagName === 'javascript')
      return (
        <>
          <Javascript className="icon javascript" />
          JavaScript
        </>
      )

    if (tagName === 'nextjs')
      return (
        <>
          <Nextjs className="icon next_js" />
          Next.js
        </>
      )

    if (tagName === 'notion-api')
      return (
        <>
          <Notion className="icon notion" />
          Notion API
        </>
      )

    if (tagName === 'styled-components')
      return (
        <>
          <Styledcomponents className="icon styled-components" />
          Styled Components
        </>
      )

    if (tagName === 'typescript')
      return (
        <>
          <Typescript className="icon typescript" />
          TypeScript
        </>
      )

    if (tagName === 'vue' || tagName === 'vue-multiselect')
      return (
        <>
          <Vue className="icon vue" />
          {(tagName === 'vue' && 'Vue') ||
            (tagName === 'vue-multiselect' && 'Vue-Multiselect')}
        </>
      )

    if (
      (tagName === 'error' || tagName === 'husky' || tagName === 'sanity-io',
      tagNmae === 'pinia')
    )
      return (
        <>
          {tagName === 'error' ||
            tagName === 'husky' ||
            (tagName === 'sanity-io' && 'Sanity.io') ||
            tagName === 'pinia'}
        </>
      )
  }

  return (
    <Link href={`/tag/${tagName}`}>
      <TagButtonStyle tagName={tagName}>
        {getTagContent(tagName)}
      </TagButtonStyle>
    </Link>
  )
}

export default TagButton

const TagButtonStyle = styled.div`
  display: flex;
  padding: 4px 18px;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 8px;
  height: 32px;
  white-space: nowrap;
  .icon {
    margin-right: 10px;
    width: 20px;
    height: 20px;
    margin-top: 1px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 4px 16px 0px #000a3c1a;
    transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  }
`
