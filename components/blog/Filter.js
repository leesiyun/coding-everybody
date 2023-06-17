import styled from 'styled-components'
import {
  Css,
  EsLint,
  FontAwesome,
  Gatsby,
  Html,
  JavaScript,
  NextJS,
  Notion,
  StyledComponents,
  TypeScript,
  Vue,
} from '../../assets/filterIcon'
import FilterButton from './FilterButton'

const Filter = ({posts}) => {
  const filterArray = []
  const isTag = posts.filter(
    post => post.properties.tag.multi_select.length > 0,
  )
  const filters = isTag.map(filters => filters.properties.tag.multi_select)
  filters.map(filter => filter.map(value => filterArray.push(value?.name)))

  const filterNames = [...new Set(filterArray)]

  const filterRendering = () => {
    return filterNames.map((filterName, index) => {
      if (filterName === 'CSS')
        return (
          <FilterButton key={index}>
            <Css className="icon_image css" />
            CSS
          </FilterButton>
        )

      if (filterName === '\bESlint')
        return (
          <FilterButton key={index}>
            <EsLint className="icon_image eslint" />
            ESlint
          </FilterButton>
        )

      if (filterName === 'FontAwesome')
        return (
          <FilterButton key={index}>
            <FontAwesome className="icon_image font-awesome" />
            FontAwesome
          </FilterButton>
        )

      if (filterName === 'Gatsby')
        return (
          <FilterButton key={index}>
            <Gatsby className="icon_image gatsby" />
            Gatsby
          </FilterButton>
        )

      if (filterName === 'HTML')
        return (
          <FilterButton key={index}>
            <Html className="icon_image html" />
            HTML
          </FilterButton>
        )

      if (filterName === 'JavaScript')
        return (
          <FilterButton key={index}>
            <JavaScript className="icon_image javascript" />
            JavaScript
          </FilterButton>
        )

      if (filterName === 'Next.js')
        return (
          <FilterButton key={index}>
            <NextJS className="icon_image next_js" />
            Next.js
          </FilterButton>
        )

      if (filterName === 'NotionAPI')
        return (
          <FilterButton key={index}>
            <Notion className="icon_image notion" />
            NotionAPI
          </FilterButton>
        )

      if (filterName === 'Styled Components')
        return (
          <FilterButton key={index}>
            <StyledComponents className="icon_image styled-components" />
            Styled Components
          </FilterButton>
        )

      if (filterName === 'TypeScript')
        return (
          <FilterButton key={index}>
            <TypeScript className="icon_image typescript" />
            TypeScript
          </FilterButton>
        )

      if (filterName === 'Vue')
        return (
          <FilterButton key={index}>
            <Vue className="icon_image vue" />
            Vue
          </FilterButton>
        )

      if (filterName === 'error')
        return <FilterButton key={index}>error</FilterButton>

      if (filterName === 'husky')
        return <FilterButton key={index}>husky</FilterButton>

      if (filterName === 'Sanity.io')
        return <FilterButton key={index}>Sanity.io</FilterButton>

      if (filterName === 'Vue-Multiselect')
        return <FilterButton key={index}>Vue-Multiselect</FilterButton>
    })
  }

  return <FilterStyle>{filterRendering()}</FilterStyle>
}

export default Filter

const FilterStyle = styled.div`
  user-select: none;
  cursor: pointer;
  width: 100%;
  padding: 18px 0px;
  display: flex;
  font-size: 14px;
  justify-content: center;
  border-top: 1px solid #000;
  gap: 12px;
`
