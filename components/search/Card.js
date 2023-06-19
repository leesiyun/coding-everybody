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

import * as FaIcons from 'react-icons/fa'

const Card = ({tagName}) => {
  if (tagName === 'CSS')
    return (
      <CardStyle>
        <div className="icon-wrapper">
          <Css className="icon css" />
        </div>
        <div>{tagName}</div>
      </CardStyle>
    )

  if (tagName === '\bESlint')
    return (
      <CardStyle>
        <div className="icon-wrapper">
          <Eslint className="icon eslint" />
        </div>
        <div>{tagName}</div>
      </CardStyle>
    )

  if (tagName === 'FontAwesome')
    return (
      <CardStyle>
        <div className="icon-wrapper">
          <Fontawesome className="icon font-awesome" />
        </div>
        <div>{tagName}</div>
      </CardStyle>
    )

  if (tagName === 'Gatsby')
    return (
      <CardStyle>
        <div className="icon-wrapper">
          <Gatsby className="icon gatsby" />
        </div>
        <div>{tagName}</div>
      </CardStyle>
    )

  if (tagName === 'HTML')
    return (
      <CardStyle>
        <div className="icon-wrapper">
          <Html className="icon html" />
        </div>
        <div>{tagName}</div>
      </CardStyle>
    )

  if (tagName === 'JavaScript')
    return (
      <CardStyle>
        <div className="icon-wrapper">
          <Javascript className="icon javascript" />
        </div>
        <div>{tagName}</div>
      </CardStyle>
    )

  if (tagName === 'Next.js')
    return (
      <CardStyle>
        <div className="icon-wrapper">
          <Nextjs className="icon next_js" />
        </div>
        <div>{tagName}</div>
      </CardStyle>
    )

  if (tagName === 'NotionAPI')
    return (
      <CardStyle>
        <div className="icon-wrapper">
          <Notion className="icon notion" />
        </div>
        <div>{tagName}</div>
      </CardStyle>
    )

  if (tagName === 'Styled Components')
    return (
      <CardStyle>
        <div className="icon-wrapper">
          <Styledcomponents className="icon styled-components" />
        </div>
        <div>{tagName}</div>
      </CardStyle>
    )

  if (tagName === 'TypeScript')
    return (
      <CardStyle>
        <div className="icon-wrapper">
          <Typescript className="icon typescript" />
        </div>
        <div>{tagName}</div>
      </CardStyle>
    )

  if (tagName === 'Vue' || tagName === 'Vue-Multiselect')
    return (
      <CardStyle>
        <div className="icon-wrapper">
          <Vue className="icon vue" />
        </div>
        <div>{tagName}</div>
      </CardStyle>
    )

  if (tagName === 'error' || tagName === 'husky' || tagName === 'Sanity.io')
    return (
      <CardStyle>
        <div className="icon-wrapper">
          <FaIcons.FaHashtag className="icon hash" />
        </div>
        <div>{tagName}</div>
      </CardStyle>
    )
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
