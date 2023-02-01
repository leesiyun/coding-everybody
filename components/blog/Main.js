import Link from 'next/link'
import styled from 'styled-components'
import Card from './Card'

const Main = ({posts}) => (
  <MainStyle>
    <div className="cardContainer">
      {posts.map(post => (
        <Link href={`/post/${post.id}`} key={post.id}>
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
    margin: 0 auto;
    padding: 60px 40px 40px 40px;
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 20px;
    margin: 0 auto;
  }
`
