import {notion, notionhq, databaseId} from '../lib/notion'
import {NotionRenderer} from 'react-notion-x'
import 'react-notion-x/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'
import 'katex/dist/katex.min.css'
import styled from 'styled-components'

import dynamic from 'next/dynamic'

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then(m => m.Code),
)
const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(m => m.Collection),
)

const Post = ({recordMap, post}) => {
  const lastEditedTime = post[0].last_edited_time
    .slice(0, 10)
    .replaceAll('-', '')
  const year = lastEditedTime.slice(0, 4)
  const month = lastEditedTime.slice(5, 6)
  const day = lastEditedTime.slice(7, 8)
  return (
    <PostStyle>
      <div className="post-header">
        <div className="post-title">
          {post[0].properties.title.title[0].plain_text}
        </div>
        <div className="post-date">
          {year}년 {month}월 {day}일
        </div>
      </div>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
        className="notion-post"
        components={{
          Code,
          Collection,
        }}
      />
    </PostStyle>
  )
}

export default Post

const PostStyle = styled.div`
  .post-header {
    background-color: #fcecc4;
    padding: 100px 75px 60px 75px;
    .post-title {
      font-size: 38px;
      font-weight: 700;
      padding: 0 0 10px 40px;
      max-width: 1000px;
      margin: 0 auto;
    }
    .post-date {
      text-align: right;
      color: #6d7b85;
      font-size: 16px;
      max-width: 1000px;
      margin: 0 auto;
    }
  }

  .notion-post {
    .notion-header,
    .notion-title {
      display: none;
    }
    .notion-page-no-cover {
      padding-top: 0;
    }

    .notion-page-content {
      max-width: 1000px;
      margin: 0 auto;
      background-color: #fff;
      padding: 30px 50px 80px 50px;
    }
    .notion-page-icon-hero {
      top: -100px;
      left: 55%;
      max-width: 100px;
      max-height: 100px;
    }
    .notion-code {
      padding: 20px 30px;
      border-radius: 8px;
    }
  }

  @media (max-width: 500px) {
    .post-header {
      padding: 70px 20px 60px 20px;
      .post-title {
        padding: 0 0 10px 10px;
      }
      .post-date {
        padding-bottom: 20px;
      }
    }
    .notion-post {
      .notion-page-content {
        padding: 30px 0px 80px 0px;
      }
      .notion-full-width {
        padding: 0 20px;
      }
    }
  }
`

export const getStaticPaths = async () => {
  const response = await notionhq.databases.query({
    database_id: databaseId,
  })
  const posts = response.results.filter(
    post => post.properties.status.status.name === 'published',
  )

  const paths = posts.map(post => ({
    params: {
      id: post.id.replaceAll('-', ''),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({params}) => {
  const pageId = params.id
  console.log(params)
  const response = await notionhq.databases.query({
    database_id: databaseId,
  })

  const recordMap = await notion.getPage(pageId)

  return {
    props: {
      post: response.results.filter(
        post => post.id.replaceAll('-', '') === pageId,
      ),
      recordMap,
    },
    revalidate: 10,
  }
}
