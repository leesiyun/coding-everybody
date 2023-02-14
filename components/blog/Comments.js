import {useRef} from 'react'

import useScript from '@/lib/use-script'

const Comments = () => {
  const comment = useRef(null)

  const status = useScript({
    url: 'https://utteranc.es/client.js',
    theme: 'github-light',
    issueTerm: 'url',
    repo: 'leesiyun/blog-comments',
    ref: comment,
  })

  return <div>{<div ref={comment}></div>}</div>
}

export default Comments
