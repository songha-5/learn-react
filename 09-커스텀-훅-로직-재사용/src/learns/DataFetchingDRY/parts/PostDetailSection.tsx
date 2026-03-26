import { useState, useEffect } from 'react'
import { formatDate } from '@/util'
import S from './PostDetailSection.module.css'
import { useFetch } from '@/hooks'
import { getEndpoint } from './getEndPoint'
import type { Post, ResponseCommentsData, ResponsePostData, ResponseUserPostsData } from './types/type'
import { FetchStatus, PrintError, SkeletonList } from '@/components'
import Comments from './Comments'
// import Post from './post'

// API 참고
// - https://koreandummyjson.vercel.app/docs/posts


// -----------------------------------------------------------------------------
// 현재 작성된 코드 문제 검토
// -----------------------------------------------------------------------------
// - [상태 파편화] 
//    isPostLoading, isCommentsLoading, isUserPostsLoading 등 
//    유사한 상태 변수가 너무 많아 컴포넌트 코드가 비대해졌습니다. (현재 약 150라인)
// - [동일 패턴의 반복] 
//    AbortController 생성, isLoading/Error 상태 관리, 
//    try-catch-finally 블록의 구조가 90% 이상 일치합니다.
// - [유지보수 어려움] 
//    현재 작동에 문제는 없지만, API 호출 방식(예: 헤더 추가)이 변경될 경우 
//    아래 코드는 호출이 사용된 세 군데를 모두 수정해야 합니다.
// -----------------------------------------------------------------------------

export default function PostDetailSection() {
  const [postId, setPostId] = useState(1)

  // 중복 로직 1: 포스트 상세 정보

  const postRespons = useFetch<ResponsePostData>({
    url: getEndpoint(`/api/posts/${postId}`),
    dependencies: [postId],
  })

  const post = postRespons.data?.post // 서버에서 가져온 포스트 데이터

  // 중복 로직 2: 댓글 목록
  // 댓글 목록
  const commentsResponse = useFetch<ResponseCommentsData>({
    url: getEndpoint(`/api/posts/${postId}/comments`),
    dependencies: [postId],
  })

  const comments = commentsResponse.data?.comments 

  // 중복 로직 3: 작성자의 다른 글 (post.userId가 있을 때만 실행)
  const userPostsResponse = useFetch<ResponseUserPostsData>({
    url: getEndpoint(`/api/posts?userId=${post?.userId}`),
    dependencies: [post?.userId]
  })

  const userOtherPosts = userPostsResponse.data?.posts // 포스트의 다른 글 가져오기

  return (
    <section className={S.container}>
      <header className={S.header}>
        <h2 className={S.title}>커뮤니티 포스트</h2>
        <nav className={S.pagination} aria-label="포스트 탐색">
          <a
            href={`/posts/${Math.max(1, postId - 1)}`}
            role="button"
            aria-disabled={postId < 2}
            className={S.navLink}
            aria-label="이전 포스트로 이동"
            title="이전 포스트로 이동"
            onClick={(e) => {
              e.preventDefault()
              if (postId < 2) return
              setPostId((postId) => Math.max(1, postId - 1))
            }}
          >
            ←
          </a>
          <span className={S.idBadge}>
            <span className="sr-only">현재 포스트 ID:</span> {postId}
          </span>
          <a
            href={`/posts/${postId + 1}`}
            role="button"
            className={S.navLink}
            aria-label="다음 포스트로 이동"
            title="다음 포스트로 이동"
            onClick={(e) => {
              e.preventDefault()
              setPostId((postId) => postId + 1)
            }}
          >
            →
          </a>
        </nav>
      </header>

      <div className={S.mainLayout}>
        <section className={S.contentArea}>
          <FetchStatus
            isLoading={postRespons.isLoading}
            error={postRespons.error}
            loadingFallback={<SkeletonList />}
          />
          <article className={S.postCard}>
            {/* {postRespons.isLoading ? (
              <div role="status" className={S.skeleton}>
                포스트 로딩 중...
              </div>
            ) : postRespons.error ? (
              <div role="alert" className={S.errorBox}>
                {postRespons.error.message}
              </div>
            ) : (
              post && (
                <>
                  <h3 className={S.postTitle}>{post.title}</h3>
                  <div className={S.postMeta}>
                    <span>작성자 ID: {post.userId}</span>
                    <span aria-hidden="true">•</span>
                    <time dateTime={post.createdAt}>
                      {formatDate(post.createdAt)}
                    </time>
                  </div>
                  <p className={S.postContent}>{post.content}</p>
                </>
              )
            )} */}
            {/* <Post post={postRespons.data?.post} /> */}
            <p>포스트 요청 로딩, 에러, 데이터 처리</p>
          </article>
          <article className={S.commentSection}>
            <h3 className={S.sectionTitle}>댓글 ({comments?.length})</h3>
            <FetchStatus
              isLoading={postRespons.isLoading}
              error={postRespons.error}
            />
            <Comments data={comments}/>


            {/* {commentsResponse.isLoading ? (
              <div role="status" className={S.skeleton}>
                댓글 로딩 중...
              </div>
            ) : commentsResponse.isLoading ? (
              <div role="alert" className={S.errorBox}>
                {commentsResponse.error?.message}
              </div>
            ) : (
              <ul className={S.commentList}>
                {comments?.map((comment) => (
                  <li key={comment.commentId} className={S.commentItem}>
                    <div className={S.commentHeader}>
                      <span className={S.commentUser}>
                        댓글 #{comment.commentId}
                      </span>
                      <time
                        dateTime={comment.createdAt}
                        className={S.commentDate}
                      >
                        {formatDate(comment.createdAt)}
                      </time>
                    </div>
                    <p className={S.commentText}>{comment.content}</p>
                  </li>
                ))}
              </ul>
            )} */}
            <p>포스트 댓글 목록 요청 로딩, 에러, 데이터 처리</p>
          </article>
        </section>

        <aside className={S.sidebar}>
          <article className={S.sidebarCard}>
            <h3 className={S.sectionTitle}>작성자의 다른 포스트</h3>
            <FetchStatus
              isLoading={postRespons.isLoading}
              loadingFallback={<SkeletonList count={1} />}
              error={postRespons.error}
              // render(function) props
              errorFallback={(message) => {
                console.log({ message })
                return (
                  <PrintError
                    message={message}
                    onRetry={postRespons.refetch}
                  />
                )
              }}
            >
            </FetchStatus>
            {/* {userPostsResponse.isLoading ? (
              <div className={S.skeleton}>포스트 리스트 로딩 중...</div>
            ) : userPostsResponse.error ? (
              <div role="alert" className={S.errorBox}>
                {userPostsResponse.error.message}
              </div>
            ) : (
              <ul className={S.otherPostList}>
                {userOtherPosts ? (
                  userOtherPosts.map((userPost) => (
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
                ) : (
                  <p className={S.empty}>다른 포스트는 없습니다.</p>
                )}
              </ul>
            )} */}
            <p>포스트 작성자의 다른 포스트 목록 요청, 로딩 에러, 데이터 처리</p>
          </article>
        </aside>
      </div>
    </section>
  )
}
