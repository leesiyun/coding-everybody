import {notionhq, databaseId} from '../lib/notion'
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
  const response = await notionhq.databases.query({
    database_id: databaseId,
    filter: {
      and: [
        {
          property: 'language',
          select: {
            equals: 'jp',
          },
        },
        {
          property: 'status',
          status: {
            equals: 'published',
          },
        },
      ],
    },
    sorts: [
      {
        timestamp: 'last_edited_time',
        direction: 'descending',
      },
    ],
  })

  return {
    props: {
      posts: response.results,
    },
  }
}
