import styled from 'styled-components'
import '@fontsource/suez-one'
import * as GoIcons from 'react-icons/go'

const Header = () => {
  return (
    <HeaderStyle>
      <div className="wrapper">
        <div className="title">
          <span>Siyun</span>log
        </div>
        <div className="icon">
          <GoIcons.GoSearch />
        </div>
      </div>
    </HeaderStyle>
  )
}

export default Header

const HeaderStyle = styled.div`
  max-width: 1200px;
  margin: 10px auto;
  font-size: 20px;
  padding: 0 40px;
  .wrapper {
    display: flex;
    justify-content: space-between;
    .title {
      font-family: 'Suez One', serif;
      font-size: 30px;
      span {
        color: #f6ab00;
      }
    }
    .icon {
      padding-top: 8px;
      color: #333333;
    }
  }
`
