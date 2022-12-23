import styled from 'styled-components'
import {NextJS, Gatsby, Notion} from '../../assets/filterIcon'

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
      if (filterName === 'Nest.js')
        return (
          <div key={index} className="icon next_js">
            <NextJS className="icon_image" />
            Nest.js
          </div>
        )
      if (filterName === 'Gatsby')
        return (
          <div key={index} className="icon gatsby">
            <Gatsby className="icon_image" />
            Gatsby
          </div>
        )
      if (filterName === 'NotionAPI')
        return (
          <div key={index} className="icon notion">
            <Notion className="icon_image" />
            NotionAPI
          </div>
        )
      if (filterName === 'Sanity.io')
        return (
          <div key={index} className="icon">
            Sanity.io
          </div>
        )
    })
  }

  return <FilterStyle>{filterRendering()}</FilterStyle>
}

export default Filter

const FilterStyle = styled.div`
  user-select: none;
  cursor: pointer;
  width: 100%;
  padding: 15px 0px;
  display: flex;
  font-size: 14px;
  justify-content: center;
  .icon {
    display: flex;
    margin: 0 4px;
    padding: 2.5px 9px 2.5px 7px;
    border-radius: 20px;
    border: 1.8px solid #fcecc4;
    .icon_image {
      margin-right: 5px;
      width: 20px;
      height: 20px;
      margin-top: 1px;
    }
  }
  .next_js .notion {
    .icon_image {
      color: #000000;
    }
  }

  .gatsby {
    .icon_image {
      fill: #663399;
    }
  }
`
