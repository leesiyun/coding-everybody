import {useRef, useState} from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import {TagButton} from '@/components/tag'
import {getTagNames} from '@/services/tag'

const Filter = ({posts, setFilterValue}) => {
  const scrollRef = useRef(null)
  const [isDrag, setIsDrag] = useState(false)
  const [startX, setStartX] = useState()

  const handleDragStart = e => {
    e.preventDefault()
    setIsDrag(true)
    setStartX(e.pageX + scrollRef.current.scrollLeft)
  }

  const handleDragEnd = () => {
    setIsDrag(false)
  }

  const handleDragMove = e => {
    if (isDrag) {
      scrollRef.current.scrollLeft = startX - e.pageX
    }
  }

  const tagNames = getTagNames(posts)

  return (
    <FilterStyle
      ref={scrollRef}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
    >
      {tagNames.map((tagName, index) => (
        <Link href={`/tag/${tagName}`}>
          <TagButton
            key={index}
            tagName={tagName}
            setFilterValue={setFilterValue}
          />
        </Link>
      ))}
    </FilterStyle>
  )
}

export default Filter

const FilterStyle = styled.div`
  user-select: none;
  cursor: pointer;
  width: 100%;
  padding: 18px 30px;
  @media (max-width: 500px) {
    padding: 18px 20px;
  }
  display: flex;
  flex-direction: row;
  font-size: 14px;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  gap: 16px;
  overflow-y: auto;
  a {
    color: #000;
  }
`
