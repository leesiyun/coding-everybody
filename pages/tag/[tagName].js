import {notionhq, databaseId} from '@/lib/notion'

import {getTagNames} from '@/services/tag'
import {Header, Main} from '@/components/blog'
import {TagHeader} from '@/components/tag'

const Tag = ({posts, tagName}) => (
  <>
    <Header />
    <TagHeader tagName={tagName} />
    <Main posts={posts} />
  </>
)

export default Tag

export const getStaticPaths = async () => {
  const response = await notionhq.databases.query({
    database_id: databaseId,
  })
  const posts = response.results.filter(
    post => post.properties.status.status.name === 'published',
  )

  const paths = getTagNames(posts).map(name => ({
    params: {
      tagName: name,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({params}) => {
  const tagName = params.tagName
  const response = await notionhq.databases.query({
    database_id: databaseId,
    filter: {
      and: [
        {
          property: 'tag',
          multi_select: {
            contains: tagName,
          },
        },
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
      tagName,
    },
  }
}
