import styled from 'styled-components'
import Image from 'next/image'
import siyunCharacter from '@/assets/siyun-icon.jpg'

const Banner = () => {
  const handleButtonClick = () =>
    window.open('https://www.wantedly.com/id/leesiyun', '_blank')

  return (
    <BannerStyle>
      <div className="banne-wrapper">
        <Image
          src={siyunCharacter}
          alt="siyun character"
          className="image"
          priority="true"
        />
        <div className="banner">
          <div className="title">
            <div className="siyun">SIYUN</div>
            <div className="log">LOG</div>
          </div>
          <button onClick={handleButtonClick}>Who is Siyun</button>
        </div>
      </div>
    </BannerStyle>
  )
}

export default Banner

const BannerStyle = styled.div`
  padding: auto 20px;
  .banne-wrapper {
    max-width: 900px;
    width: 100%;
    height: 550px;
    margin: 50px auto 28px auto;
    display: flex;
    font-family: var(--font-poppins);
    font-size: 16px;
    padding: 0 40px;
    justify-content: center;
    @media (max-width: 800px) {
      height: 480px;
    }
    @media (max-width: 420px) {
      height: 420px;
    }
    @media (max-width: 320px) {
      height: 390px;
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
      @media (max-width: 800px) {
        margin: 0 auto;
        top: 220px;
        width: 340px;
        height: 340px;
        left: 10%;
      }
      @media (max-width: 420px) {
        width: 280px;
        height: 280px;
        left: 4%;
      }
      @media (max-width: 320px) {
        width: 260px;
        height: 260px;
        top: 200px;
      }
    }
    .banner {
      display: block;
      @media (max-width: 800px) {
        margin-top: 20px;
      }
      @media (max-width: 420px) {
        margin-top: 0px;
      }
      .title {
        position: relative;
        z-index: 1;
        font-family: var(--font-poppins);
        font-weight: 800;
        font-size: 140px;
        display: flex;
        .siyun {
          color: #fff;
          text-shadow: -1px 0 #333, 0 1px #333, 1px 0 #333, 0 -1px #333;
        }
        @media (max-width: 800px) {
          font-size: 120px;
          display: block;
          line-height: 100px;
          .log {
            float: right;
          }
        }
        @media (max-width: 420px) {
          font-size: 100px;
          margin: auto 20px;
        }
        @media (max-width: 320px) {
          font-size: 80px;
          line-height: 80px;
          margin: auto 20px;
        }
      }
      button {
        width: 190px;
        height: 50px;
        color: #fff;
        background-color: #000;
        cursor: pointer;
        border-radius: 10px;
        border: none;
        font-size: 18px;
        position: relative;
        left: 30%;
        top: 100px;
        @media (max-width: 800px) {
          top: 80px;
          left: 48%;
        }
        @media (max-width: 420px) {
          left: 38%;
        }
        @media (max-width: 320px) {
          font-size: 16px;
          width: 180px;
          height: 46px;
          left: 30%;
          top: 90px;
        }
      }
    }
  }
`
