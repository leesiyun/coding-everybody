import {notionhq, databaseId} from '@/lib/notion'

import {Header, Main} from '@/components/blog'

const target = ({posts}) => (
  <>
    <Header />
    <Main posts={posts} />
  </>
)

export default target

export const getServerSideProps = async ({params}) => {
  const target = params.target.trim().toLowerCase()

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
      posts: response.results.filter(
        post =>
          post.properties.keyword.rich_text.some(({plain_text}) =>
            plain_text.trim().toLowerCase().includes(target),
          ) ||
          post.properties.title.title[0].plain_text
            .trim()
            .toLowerCase()
            .includes(target) ||
          post.properties.tag.multi_select.some(({name}) =>
            name.trim().toLowerCase().includes('html'),
          ),
      ),
    },
  }
}
