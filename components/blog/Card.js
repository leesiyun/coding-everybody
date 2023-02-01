import Image from 'next/image'
import styled from 'styled-components'

const Card = ({post}) => {
  return (
    <CardStyle>
      <div>
        <img
          src={post.cover?.file.url}
          alt="cover image"
          width="270"
          height="160"
        />
      </div>
      <div className="card_title">
        {post.properties.title.title[0].plain_text}
      </div>
      <div className="card_date">{post.last_edited_time.slice(0, 10)}</div>
    </CardStyle>
  )
}

export default Card

const CardStyle = styled.div`
  margin-top: 10px;
  border-radius: 13px;
  background-color: #fff;
  max-width: 270px;
  font-size: 16px;
  box-shadow: 0 4px 8px -2px #000a3c1a;
  overflow: hidden;
  transition: box-shadow 0.2s;
  cursor: pointer;
  .card_title {
    padding: 10px 15px 5px 15px;
    font-weight: 600;
    height: 55px;
  }
  .card_date {
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
