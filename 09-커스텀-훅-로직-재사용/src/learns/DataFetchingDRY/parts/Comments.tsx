import S from './BookDetailSection.module.css'

interface Props {
  data: Comment[]
}

export default function Comments({data}: Props) {
  <ul className={S.otherPostList}>
    {data ? (
      data.map((userPost) => (
        <li key={userPost.id} className={S.otherPostItem}>
          <a
            href=""
            role="button"
            onClick={(e) => {
              e.preventDefault()
              setPostId(userPost.id)
            }}
          >
            <span className={S.otherPostTitle}>
              {userPost.title} <span className="sr-only">포스트로 이동</span>
            </span>
            <time
              dateTime={userPost.createdAt}
              className={S.otherPostDate}
            >
              {formatDate(userPost.createdAt)}
            </time>
          </a>
        </li>
      ))
    )
    </ul>
}