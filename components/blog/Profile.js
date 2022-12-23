import styled from 'styled-components'
import Image from 'next/image'
import siyunCharacter from '../../assets/siyun.jpeg'
import '@fontsource/poppins'
import '@fontsource/poppins/700.css'

const Profile = () => {
  return (
    <ProfileStyle>
      <div>
        <Image
          src={siyunCharacter}
          alt="siyun character"
          className="profile_image"
        />
      </div>
      <div className="profile_main">
        <div className="profile_name">Lee Siyun</div>
        <div>
          こんにちは！フロントエンドエンジニアのシユンです。
          好きな技術はReactでJAM Stackに関心が高いです。
          <br />
          エンジニアはSierから始めて、今年3年目になりました。
        </div>
      </div>
    </ProfileStyle>
  )
}

export default Profile

const ProfileStyle = styled.div`
  max-width: 960px;
  margin: 55px auto 28px auto;
  display: flex;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  padding: 0 40px;
  .profile_image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-right: 25px;
  }
  .profile_main {
    display: block;
    .profile_name {
      font-weight: 700;
      margin: 10px 0;
      font-size: 20px;
    }
  }
`
