import {notion, notionhq, databaseId} from '../lib/notion'
import {NotionRenderer} from 'react-notion-x'
import 'react-notion-x/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'
import 'katex/dist/katex.min.css'
import styled from 'styled-components'

import {Header, Comments} from '@/components/blog'

import Image from 'next/image'
import dynamic from 'next/dynamic'

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then(m => m.Code),
)
const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(m => m.Collection),
)

const Post = ({recordMap, post}) => {
  const isFile = post[0].icon?.type === 'file'
  const isEmoji = post[0].icon?.type === 'emoji'
  return (
    <PostStyle>
      <Header />
      <div className="post-header">
        <div className="post-title">
          <div className="post-icon">
            {isFile && (
              <Image
                src={post[0].icon?.file.url}
                priority="true"
                className="card-image-icon"
                width={50}
                height={50}
                alt="icon"
              />
            )}
            {isEmoji && <div className="card-icon">{post.icon?.emoji}</div>}
          </div>
          {post[0].properties.title.title[0].plain_text}
        </div>
      </div>

      <div className="post-content">
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
      </div>
      <Comments />
    </PostStyle>
  )
}

export default Post

const PostStyle = styled.div`
  padding-bottom: 80px;
  .post-header {
    display: flex;
    padding: 30px 75px 50px 75px;
    border-bottom: 1px solid #000000;
  }
  .post-title {
    text-align: center;
    font-size: 28px;
    max-width: 1200px;
    margin: 0 auto;
    font-weight: 600;
    line-height: 1.2;
    .post-icon {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
    }
  }

  .post-content {
    margin: 0 auto;
    max-width: 1400px;
    .notion-post {
      background-color: #f0ede8;
      margin: 0 40px;
      @media (max-width: 500px) {
        margin: 0 20px;
      }
      .notion-header,
      .notion-title {
        display: none;
      }
      .notion-page-no-cover {
        padding-top: 0;
      }
      .notion-full-width {
        padding: 0;
      }
      .notion-page {
        min-height: 100px;
      }
      .notion-page-content {
        padding: 30px 50px 80px 50px;
        @media (max-width: 500px) {
          padding: 20px 20px 80px 20px;
        }
        border-radius: 30px;
        border: 1px solid #000000;
        background-color: #fff;
        .notion-bookmark-image {
          display: none;
        }
      }
      .notion-page-icon-hero {
        display: none;
      }
      .notion-collection-row {
        margin: 40px auto 0 auto;
        max-width: 900px;
      }
      pre {
        padding: 20px 30px;
        border-radius: 8px;
      }
    }
  }

  .utterances {
    width: 90%;
    max-width: 1318px;
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
