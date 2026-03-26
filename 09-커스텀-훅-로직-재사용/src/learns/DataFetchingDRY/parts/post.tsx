import { formatDate } from '@/util'
import S from './BookDetailSection.module.css'
import type { Post } from './types/type'

interface Props {
  post: Post
}


export default function Post({ post }: Props) {
  return (
     <>
      <h3 className={S.postTitle}>{post.title}</h3>
      <div className={S.postMeta}>
        <span>작성자 ID: {post?.userId}</span>
        <span aria-hidden="true">•</span>
        <time dateTime={post?.createdAt}>
          {post?.createdAt ? formatDate(post?.createdAt) : ''}
        </time>
      </div>
      <p className={S.postContent}>{post?.content}</p>
    </>
  )
}