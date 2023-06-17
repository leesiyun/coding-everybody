import Link from 'next/link'
import styled from 'styled-components'
import '@fontsource/suez-one'
import * as FaIcons from 'react-icons/fa'

const Header = () => {
  return (
    <HeaderStyle>
      <div className="title">
        <span>SIYUN</span>LOG
      </div>
      <Link href="/search">
        <div className="icon">
          <FaIcons.FaSearch />
        </div>
      </Link>
    </HeaderStyle>
  )
}

export default Header

const HeaderStyle = styled.div`
  width: 100%;
  margin: 10px auto;
  font-size: 20px;
  padding: 0 80px 8px 40px;
  @media (max-width: 800px) {
    padding-right: 40px;
  }
  @media (max-width: 500px) {
    padding: 0 20px 8px 20px;
  }
  border-bottom: 1px solid #000;
  display: flex;
  justify-content: space-between;

  .title {
    font-family: 'Poppins', serif;
    font-weight: 800;
    font-size: 30px;
    span {
      color: #fff;
      text-shadow: -1px 0 #333, 0 1px #333, 1px 0 #333, 0 -1px #333;
    }
  }
  .icon {
    padding-top: 8px;
    color: #333333;
  }
`
