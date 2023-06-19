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

const TagButton = ({tagName, setFilterValue}) => {
  const handleClick = tagName => setFilterValue(tagName)
  if (tagName === 'CSS')
    return (
      <TagButtonStyle tagName={tagName} onClick={() => handleClick(tagName)}>
        <Css className="icon css" />
        {tagName}
      </TagButtonStyle>
    )

  if (tagName === '\bESlint')
    return (
      <TagButtonStyle tagName={tagName} onClick={() => handleClick(tagName)}>
        <Eslint className="icon eslint" />
        {tagName}
      </TagButtonStyle>
    )

  if (tagName === 'FontAwesome')
    return (
      <TagButtonStyle tagName={tagName} onClick={() => handleClick(tagName)}>
        <Fontawesome className="icon font-awesome" />
        {tagName}
      </TagButtonStyle>
    )

  if (tagName === 'Gatsby')
    return (
      <TagButtonStyle tagName={tagName} onClick={() => handleClick(tagName)}>
        <Gatsby className="icon gatsby" />
        {tagName}
      </TagButtonStyle>
    )

  if (tagName === 'HTML')
    return (
      <TagButtonStyle tagName={tagName} onClick={() => handleClick(tagName)}>
        <Html className="icon html" />
        {tagName}
      </TagButtonStyle>
    )

  if (tagName === 'JavaScript')
    return (
      <TagButtonStyle tagName={tagName} onClick={() => handleClick(tagName)}>
        <Javascript className="icon javascript" />
        {tagName}
      </TagButtonStyle>
    )

  if (tagName === 'Next.js')
    return (
      <TagButtonStyle tagName={tagName} onClick={() => handleClick(tagName)}>
        <Nextjs className="icon next_js" />
        {tagName}
      </TagButtonStyle>
    )

  if (tagName === 'NotionAPI')
    return (
      <TagButtonStyle tagName={tagName} onClick={() => handleClick(tagName)}>
        <Notion className="icon notion" />
        {tagName}
      </TagButtonStyle>
    )

  if (tagName === 'Styled Components')
    return (
      <TagButtonStyle tagName={tagName} onClick={() => handleClick(tagName)}>
        <Styledcomponents className="icon styled-components" />
        {tagName}
      </TagButtonStyle>
    )

  if (tagName === 'TypeScript')
    return (
      <TagButtonStyle tagName={tagName} onClick={() => handleClick(tagName)}>
        <Typescript className="icon typescript" />
        {tagName}
      </TagButtonStyle>
    )

  if (tagName === 'Vue' || tagName === 'Vue-Multiselect')
    return (
      <TagButtonStyle tagName={tagName} onClick={() => handleClick(tagName)}>
        <Vue className="icon vue" />
        {tagName}
      </TagButtonStyle>
    )

  if (tagName === 'error' || tagName === 'husky' || tagName === 'Sanity.io')
    return (
      <TagButtonStyle tagName={tagName} onClick={() => handleClick(tagName)}>
        {tagName}
      </TagButtonStyle>
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
