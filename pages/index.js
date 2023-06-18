import {notionhq, databaseId} from '../lib/notion'
import {useState, useEffect} from 'react'

import {Header, Banner, Filter, Main} from '@/components/blog'

const Home = ({posts}) => {
  useEffect(() => {
    console.log('一緒に働きませんか？😎　leesiyun.dev@gmail.com')
  }, [])

  const [filterValue, setFilterValue] = useState('')

  const filteredPost = posts.filter(({properties}) =>
    properties.tag?.multi_select.some(tag => tag.name === filterValue),
  )
  return (
    <>
      <Header setFilterValue={setFilterValue} />
      <Banner />
      <Filter posts={posts} setFilterValue={setFilterValue} />
      <Main posts={filteredPost.length ? filteredPost : posts} />
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
