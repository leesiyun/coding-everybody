import styled from 'styled-components'
import * as FaIcons from 'react-icons/fa'

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


const Card = ({tagName}) => {
  if (tagName === 'css')
    return (
      <CardStyle>
        <div className="icon-wrapper">
          <Css className="icon css" />
        </div>
        <div>CSS</div>
      </CardStyle>
    )

  if (tagName === '\beslint')
    return (
      <CardStyle>
        <div className="icon-wrapper">
          <Eslint className="icon eslint" />
        </div>
        <div>ESLint</div>
      </CardStyle>
    )

  if (tagName === 'font-awesome')
    return (
      <CardStyle>
        <div className="icon-wrapper">
          <Fontawesome className="icon font-awesome" />
        </div>
        <div>FontAwesome</div>
      </CardStyle>
    )

  if (tagName === 'gatsby')
    return (
      <CardStyle>
        <div className="icon-wrapper">
          <Gatsby className="icon gatsby" />
        </div>
        <div>Gatsby</div>
      </CardStyle>
    )

  if (tagName === 'html')
    return (
      <CardStyle>
        <div className="icon-wrapper">
          <Html className="icon html" />
        </div>
        <div>HTML</div>
      </CardStyle>
    )

  if (tagName === 'javascript')
    return (
      <CardStyle>
        <div className="icon-wrapper">
          <Javascript className="icon javascript" />
        </div>
        <div>JavaScript</div>
      </CardStyle>
    )

  if (tagName === 'nextjs')
    return (
      <CardStyle>
        <div className="icon-wrapper">
          <Nextjs className="icon next_js" />
        </div>
        <div>Next.js</div>
      </CardStyle>
    )

  if (tagName === 'notion-api')
    return (
      <CardStyle>
        <div className="icon-wrapper">
          <Notion className="icon notion" />
        </div>
        <div>Notion API</div>
      </CardStyle>
    )

  if (tagName === 'styled-components')
    return (
      <CardStyle>
        <div className="icon-wrapper">
          <Styledcomponents className="icon styled-components" />
        </div>
        <div>Styled Components</div>
      </CardStyle>
    )

  if (tagName === 'typescript')
    return (
      <CardStyle>
        <div className="icon-wrapper">
          <Typescript className="icon typescript" />
        </div>
        <div>TypeScript</div>
      </CardStyle>
    )

  if (tagName === 'vue' || tagName === 'vue-multiselect')
    return (
      <CardStyle>
        <div className="icon-wrapper">
          <Vue className="icon vue" />
        </div>
        <div>
          {(tagName === 'vue' && 'Vue') ||
            (tagName === 'vue-multiselect' && 'Vue-Multiselect')}
        </div>
      </CardStyle>
    )

  if (tagName === 'error' || tagName === 'husky' || tagName === 'sanity-io')
    return (
      <CardStyle>
        <div className="icon-wrapper">
          <FaIcons.FaHashtag className="icon hash" />
        </div>
        <div>
          {(tagName === 'error' && 'error') ||
            (tagName === 'husky' && 'husky') ||
            (tagName === 'sanity-io' && 'Sanity.io')}
        </div>
      </CardStyle>
    )
  return null
}

export default Card

const CardStyle = styled.div`
  width: 100%;
  height: 140px;
  border-radius: 30px;
  border: 1px solid #000;
  cursor: pointer;
  margin: 0 auto;
  background-color: #fff;
  font-size: 16px;
  text-align: center;
  padding-top: 25px;
  &:hover {
    box-shadow: 0px 4px 16px 0px #000a3c1a;
    background-color: #f0ede8;
  }
  .icon-wrapper {
    height: 60px;
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
    .icon {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
    }
  }

  .hash {
    width: 45px;
    height: 45px;
    fill: #2e2e2e;
  }
`
