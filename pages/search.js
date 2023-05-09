import {notionhq, databaseId} from '../lib/notion'
import Header from '../components/blog/Header'
import Search from '../components/blog/Search'
import Filter from '../components/blog/Filter'
import Main from '../components/blog/Main'

const SearchPage = ({posts}) => {
  return (
    <>
      <Header />
      <Search />
      <Filter posts={posts} />
      <Main posts={posts} />
    </>
  )
}

export default SearchPage

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
