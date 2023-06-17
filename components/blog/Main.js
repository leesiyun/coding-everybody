import Link from 'next/link'
import styled from 'styled-components'
import Card from './Card'

const Main = ({posts}) => (
  <MainStyle>
    <div className="cardContainer">
      {posts.map(post => (
        <Link href={`/${post.id.replaceAll('-', '')}`} key={post.id}>
          <Card post={post} />
        </Link>
      ))}
    </div>
  </MainStyle>
)

export default Main

const MainStyle = styled.div`
  width: 100%;
  min-height: 100vh;
  border-top: 1px solid #000;
  .cardContainer {
    display: grid;
    max-width: 1800px;
    margin: 0 auto;
    gap: 30px;

    grid-template-columns: repeat(5, 1fr);
    @media (max-width: 1700px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 1400px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 1000px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
    }

    padding: 60px 100px 40px 100px;
    @media (max-width: 800px) {
      padding: 60px 40px 40px 40px;
    }
    @media (max-width: 500px) {
      padding: 60px 20px 40px 20px;
    }
    @media (max-width: 300px) {
      padding: 60px 10px 40px 10px;
    }
  }
`
