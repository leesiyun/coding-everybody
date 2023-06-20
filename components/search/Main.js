import Link from 'next/link'
import styled from 'styled-components'

import {Card} from '@/components/search'

const Main = ({tagNames}) => (
  <MainStyle>
    <div className="card-wrapper">
      {tagNames.map((tagName, index) => (
        <Link href={`/tag/${tagName}`}>
          <Card key={index} tagName={tagName} />
        </Link>
      ))}
    </div>
  </MainStyle>
)

export default Main

const MainStyle = styled.div`
  display: flex;
  justify-content: center;
  .card-wrapper {
    display: grid;
    max-width: 1590px;
    margin: 60px 100px 40px 100px;
    @media (max-width: 800px) {
      margin: 60px 40px 40px 40px;
    }
    @media (max-width: 600px) {
      margin: 60px 20px 40px 20px;
      max-width: 400px;
    }
    @media (max-width: 500px) {
      margin-top: 48px;
    }
    width: 100%;
    gap: 20px;
    grid-template-columns: repeat(7, 1fr);
    @media (max-width: 1700px) {
      grid-template-columns: repeat(6, 1fr);
    }
    @media (max-width: 1400px) {
      grid-template-columns: repeat(5, 1fr);
    }
    @media (max-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 1000px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 300px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  a {
    color: #000;
  }
`
