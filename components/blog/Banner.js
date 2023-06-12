import styled from 'styled-components'
import Image from 'next/image'
import siyunCharacter from '@/assets/siyun-icon.jpg'
import '@fontsource/poppins'
import '@fontsource/poppins/700.css'

const Banner = () => {
  return (
    <BannerStyle>
      <Image src={siyunCharacter} alt="siyun character" className="image" />
      <div className="banner">
        <div className="title">
          <span>SIYUN</span>LOG
        </div>
        <button>Who is Siyun</button>
      </div>
    </BannerStyle>
  )
}

export default Banner

const BannerStyle = styled.div`
  max-width: 900px;
  width: 100%;
  height: 540px;
  margin: 50px auto 28px auto;
  display: flex;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  padding: 0 40px;
  justify-content: center;
  @media (max-width: 600px) {
    display: block;
    margin-top: 40px;
    max-width: 480px;
  }
  .image {
    position: absolute;
    left: 50%;
    top: 210px;
    width: 390px;
    height: 390px;
    box-sizing: border-box;
    border: 2px solid #000000;
    border-radius: 50%;
    margin-right: 25px;
    @media (max-width: 558px) {
      margin: 0 auto;
      width: 185px;
      height: 185px;
    }
  }
  .banner {
    display: block;
    .title {
      position: relative;
      z-index: 1;
      font-family: 'Poppins', serif;
      font-weight: 800;
      font-size: 140px;
      span {
        color: #fff;
        text-shadow: -1px 0 #333, 0 1px #333, 1px 0 #333, 0 -1px #333;
      }
    }
    button {
      width: 190px;
      height: 50px;
      color: #fff;
      background-color: #000;
      border-radius: 10px;
      border: none;
      font-size: 18px;
      position: relative;
      left: 30%;
      top: 100px;
    }
  }
`
