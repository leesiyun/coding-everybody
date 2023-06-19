import {notionhq, databaseId} from '@/lib/notion'
import {useState} from 'react'

import {Header, Search} from '@/components/blog'
import {Main} from '@/components/search'
import {getTagNames} from '@/services/tag'

const SearchPost = ({posts}) => {
  const [searchValue, setSearchValue] = useState('')

  const tagNames = getTagNames(posts)

  const searchedTagNames = tagNames.filter(name =>
    name.replaceAll(' ', '').toLowerCase().includes(searchValue),
  )

  return (
    <>
      <Header />
      <Search setSearchValue={setSearchValue} />
      <Main tagNames={searchedTagNames} />
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
