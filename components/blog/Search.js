import styled from 'styled-components'
import {useState} from 'react'

const Search = ({posts}) => {
  const [value, setValue] = useState('')

  const handleChange = e => setValue(e.target.value)

  return (
    <SearchStyle>
      <input onChange={handleChange} />
    </SearchStyle>
  )
}

export default Search

const SearchStyle = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0 20px 0;
  input {
    width: 800px;
    height: 50px;
    border-radius: 100px;
    border: 1px solid #e2e2e2;
    &:focus {
      border: 1px solid #f8bf52;
    }
  }
`
