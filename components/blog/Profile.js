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
          こんにちは！東京でフロントエンドエンジニアとして働いています。
          <br />
          好きな技術はreactでjamstackに関心が高いです。
          <br />
          現在react勉強会とフロントエンド勉強会を運営しています。
        </div>
      </div>
    </ProfileStyle>
  )
}

export default Profile

const ProfileStyle = styled.div`
  max-width: 700px;
  margin: 50px auto 28px auto;
  display: flex;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  padding: 0 40px;
  @media (max-width: 600px) {
    display: block;
    margin-top: 40px;
    max-width: 480px;
  }
  .profile_image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-right: 25px;
    @media (max-width: 558px) {
      margin: 0 auto;
      width: 185px;
      height: 185px;
    }
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
