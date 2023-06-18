import styled from 'styled-components'
import Image from 'next/image'

const Card = ({post}) => {
  const isFile = post.icon?.type === 'file'
  const isEmoji = post.icon?.type === 'emoji'
  return (
    <CardStyle>
      <div>
        <div className="card-image">
          {isFile && (
            <Image
              src={post.icon?.file.url}
              priority="true"
              className="card-image-icon"
              width={60}
              height={60}
              alt="icon"
            />
          )}
          {isEmoji && <div className="card-icon">{post.icon?.emoji}</div>}
        </div>
      </div>
      <div className="card-title">
        {post.properties.title.title[0]?.plain_text}
      </div>
      <div className="card-date">{post.last_edited_time.slice(0, 10)}</div>
    </CardStyle>
  )
}

export default Card

const CardStyle = styled.div`
  margin: 10px auto 0 auto;
  border-radius: 30px;
  border: 1px solid #000;
  font-size: 16px;
  overflow: hidden;
  transition: box-shadow 0.2s;
  cursor: pointer;
  position: relative;
  width: 100%;
  @media (max-width: 1100px) {
    max-width: 400px;
  }
  .card-image {
    height: 120px;
    border-bottom: 1px solid #000;
  }

  .card-image-icon {
    margin: 0 auto;
    position: relative;
    top: 30px;
    border-radius: 10px;
  }

  .card-icon {
    font-size: 50px;
    text-align: center;
    padding-top: 20px;
  }

  .card-title {
    padding: 12px 15px 10px 15px;
    font-weight: 600;
    height: 62px;
    color: #2c2c2c;
    background-color: #fff;
    line-height: 22px;
    word-break: break-all;
  }
  .card-date {
    padding: 10px 15px 15px 20px;
    background-color: #fff;
    font-size: 12px;
    color: #b7c2cb;
  }
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0px 4px 16px 0px #000a3c1a;
    transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  }
`
