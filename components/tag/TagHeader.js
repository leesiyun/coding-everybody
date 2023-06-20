import * as FaIcons from 'react-icons/fa'
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

const TagHeader = ({tagName}) => {
  const getTagContent = tagName => {
    if (tagName === 'css')
      return (
        <>
          <div className="icon-wrapper">
            <Css className="icon css" />
          </div>
          <div className="title">CSS</div>
        </>
      )

    if (tagName === '\beslint')
      return (
        <>
          <div className="icon-wrapper">
            <Eslint className="icon eslint" />
          </div>
          <div className="title">ESLint</div>
        </>
      )

    if (tagName === 'font-awesome')
      return (
        <>
          <div className="icon-wrapper">
            <Fontawesome className="icon font-awesome" />
          </div>
          <div className="title">FontAwesome</div>
        </>
      )

    if (tagName === 'gatsby')
      return (
        <>
          <div className="icon-wrapper">
            <Gatsby className="icon gatsby" />
          </div>
          <div className="title">Gatsby</div>
        </>
      )

    if (tagName === 'html')
      return (
        <>
          <div className="icon-wrapper">
            <Html className="icon html" />
          </div>
          <div className="title">HTML</div>
        </>
      )

    if (tagName === 'javascript')
      return (
        <>
          <div className="icon-wrapper">
            <Javascript className="icon javascript" />
          </div>
          <div className="title">JavaScript</div>
        </>
      )

    if (tagName === 'nextjs')
      return (
        <>
          <div className="icon-wrapper">
            <Nextjs className="icon next_js" />
          </div>
          <div className="title">Next.js</div>
        </>
      )

    if (tagName === 'notion-api')
      return (
        <>
          <div className="icon-wrapper">
            <Notion className="icon notion" />
          </div>
          <div className="title">Notion API</div>
        </>
      )

    if (tagName === 'styled-components')
      return (
        <>
          <div className="icon-wrapper">
            <Styledcomponents className="icon styled-components" />
          </div>
          <div className="title">Styled Components</div>
        </>
      )

    if (tagName === 'typescript')
      return (
        <>
          <div className="icon-wrapper">
            <Typescript className="icon typescript" />
          </div>
          <div className="title">TypeScript</div>
        </>
      )

    if (tagName === 'vue' || tagName === 'vue-multiselect')
      return (
        <>
          <div className="icon-wrapper">
            <Vue className="icon vue" />
          </div>
          <div className="title">
            {(tagName === 'vue' && 'Vue') ||
              (tagName === 'vue-multiselect' && 'Vue-Multiselect')}
          </div>
        </>
      )

    if (tagName === 'error' || tagName === 'husky' || tagName === 'sanity-io')
      return (
        <>
          <div className="icon-wrapper">
            <FaIcons.FaHashtag className="icon hash" />
          </div>
          <div className="title">
            {(tagName === 'error' && 'error') ||
              (tagName === 'husky' && 'husky') ||
              (tagName === 'sanity-io' && 'Sanity.io')}
          </div>
        </>
      )
  }

  return <TagHeaderStyle>{getTagContent(tagName)}</TagHeaderStyle>
}

export default TagHeader

const TagHeaderStyle = styled.div`
  padding: 70px 75px 20px 75px;
  width: 100%;
  margin: 0 auto;
  border-bottom: 1px solid #000000;
  .icon-wrapper {
    display: flex;
    justify-content: center;
  }
  .icon {
    width: 60px;
    height: 60px;
  }
  .title {
    text-align: center;
    font-size: 28px;
    font-weight: 600;
    margin-top: 20px;
    height: 100px;
  }
`
