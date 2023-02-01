import {notion, notionhq, databaseId} from '../../lib/notion'
import {NotionRenderer} from 'react-notion-x'

const Blog = ({recordMap}) => {
  return (
    <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
  )
}

export default Blog

export const getStaticPaths = async () => {
  const response = await notionhq.databases.query({
    database_id: databaseId,
  })
  const posts = response.results.filter(
    post => post.properties.status.status.name === 'published',
  )

  const paths = posts.map(post => ({
    params: {
      id: post.id,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({params}) => {
  const pageId = params.id

  const recordMap = await notion.getPage(pageId)

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  }
}
