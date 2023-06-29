import styled from 'styled-components'
import {useRouter} from 'next/router'
import {useRef, useEffect} from 'react'
import * as FaIcons from 'react-icons/fa'

const Search = ({searchValue, setSearchValue}) => {
  const router = useRouter()
  const inputRef = useRef(null)
  useEffect(() => {
    if (inputRef.current !== null) inputRef.current.focus()
  }, [])

  const handleChange = e =>
    setSearchValue(e.target.value.replaceAll(' ', '').toLowerCase())

  const handleClick = () => router.push(`/search/${searchValue}`)

  return (
    <SearchStyle>
      <div className="input-wrapper">
        <div className="icon">
          <FaIcons.FaSearch />
        </div>
        <input ref={inputRef} onChange={handleChange} onClick={handleClick} />
      </div>
    </SearchStyle>
  )
}

export default Search

const SearchStyle = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px 0 0 0;
  @media (max-width: 500px) {
    padding: 0;
  }
  .input-wrapper {
    width: 100%;
    margin: 0 100px;
    max-width: 1590px;
    @media (max-width: 800px) {
      margin: 0 40px;
    }
    @media (max-width: 600px) {
      margin: 0 20px;
      max-width: 400px;
    }
    .icon {
      font-size: 24px;
      position: relative;
      top: 54px;
      left: 30px;
      width: 20px;
    }
    input {
      width: 100%;
      border-radius: 20px;
      border: 1px solid #000;
      padding: 0 20px 0 72px;
      height: 60px;
      font-size: 20px;
      &:focus {
        outline: none;
        box-shadow: 0px 4px 16px 0px #000a3c1a;
      }
    }
  }
`
