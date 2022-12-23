import {Client} from '@notionhq/client'
import Header from '../components/blog/Header'
import Profile from '../components/blog/Profile'
import Filter from '../components/blog/Filter'
import Main from '../components/blog/Main'

const Home = ({posts}) => {
  console.log('一緒に働きませんか？😎　leesiyun.dev@gmail.com')
  return (
    <>
      <Header />
      <Profile />
      <Filter posts={posts} />
      <Main posts={posts} />
    </>
  )
}

export default Home

export const getStaticProps = async () => {
  const notion = new Client({auth: process.env.NOTION_KEY})
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  })

  return {
    props: {
      posts: response.results.filter(
        post => post.properties.status.status.name === 'published',
      ),
    },
  }
}
