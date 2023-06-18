import {notionhq, databaseId} from '@/lib/notion'
import {useState} from 'react'

import {Header, Search, Main} from '@/components/blog'

const SearchPost = ({posts}) => {
  const [searchValue, setSearchValue] = useState('')

  const searchedPost = posts.filter(({properties}) =>
    properties.title.title[0].plain_text
      .replaceAll(' ', '')
      .toLowerCase()
      .includes(searchValue),
  )

  return (
    <>
      <Header />
      <Search setSearchValue={setSearchValue} />
      <Main posts={searchedPost} />
    </>
  )
}

export default SearchPost

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
