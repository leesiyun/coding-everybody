import Image from 'next/image'
import styled from 'styled-components'

const Card = ({post}) => {
  return (
    <CardStyle>
      <div>
        <div className="card-background"></div>
      </div>
      <div className="card-title">
        {post.properties.title.title[0].plain_text}
      </div>
      <div className="card-date">{post.last_edited_time.slice(0, 10)}</div>
    </CardStyle>
  )
}

export default Card

const CardStyle = styled.div`
  margin-top: 10px;
  border-radius: 13px;
  background-color: #fff;
  font-size: 16px;
  box-shadow: 0 4px 8px -2px #000a3c1a;
  overflow: hidden;
  transition: box-shadow 0.2s;
  cursor: pointer;
  position: relative;
  .card-background {
    height: 120px;
    background-color: #f8bf52;
  }
  .card-title {
    padding: 12px 15px 10px 15px;
    font-weight: 600;
    height: 75px;
    width: 300px;
    @media (max-width: 1100px) {
      width: 270px;
    }
    @media (max-width: 310px) {
      width: 240px;
    }
    color: #2c2c2c;
    line-height: 22px;
    word-break: break-all;
  }
  .card-date {
    padding: 10px 15px;
    font-size: 12px;
    color: #b7c2cb;
  }
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0px 4px 16px 0px #000a3c1a;
    transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  }
`
