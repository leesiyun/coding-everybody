import {NotionAPI} from 'notion-client'

import {Client} from '@notionhq/client'

export const notionhq = new Client({auth: process.env.NOTION_KEY})
export const databaseId = process.env.NOTION_DATABASE_ID
export const notion = new NotionAPI({
  activeUser: process.env.NOTION_ACTIVE_USER,
  authToken: process.env.NOTION_TOKEN_V2,
})
