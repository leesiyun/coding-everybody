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
  background-color: #fcecc4;
  min-height: 100vh;

  .cardContainer {
    max-width: 960px;
    display: grid;
    margin: 0 auto;
    padding: 60px 40px 40px 40px;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    @media (max-width: 897px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 631px) {
      grid-template-columns: repeat(1, 1fr);
    }
    @media (max-width: 500px) {
      padding: 60px 20px 40px 20px;
    }
  }
`
