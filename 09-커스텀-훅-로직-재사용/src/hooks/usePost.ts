import { getEndpoint } from "@/learns/DataFetchingDRY/parts/getEndPoint"
import { useEffect, useState } from "react"

interface Post {
  id: number
  title: string
  content: string
  imgUrl: string
  createdAt: string
  userId: number
}

interface Comment {
  postId: number
  commentId: number
  content: string
  createdAt: string
}

interface ResponsePostData {
  message: string
  post: Post
}

interface ResponseCommentsData {
  message: string
  comments: Comment[]
}

interface ResponseUserPostsData {
  message: string
  posts: Post[]
}


export function usePost<T>({url, dependencies, options}: PostParams) {
  const [postId, setPostId] = useState(1)
  
  // 중복 로직 1: 포스트 상세 정보
  const [post, setPost] = useState<Post | null>(null)
  const [isPostLoading, setIsPostLoading] = useState(false)
  const [postError, setPostError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller

    const fetchPost = async () => {
      setIsPostLoading(true)
      setPostError(null)
    
      try {
        const response = await fetch(
          getEndpoint(`/api/posts/${postId}`), 
          { signal },
        )
    
        if (!response.ok) throw new Error('포스트를 불러오지 못했습니다.')
    
        const responseData: ResponsePostData = (await response.json())
        setPost(responseData.post)
      } catch (error) {
        const isError = error instanceof Error
        if (isError && error.name === 'AbortError') return
        const errorMessage = isError ? error.message : '알 수 없는 에러 발생' 
        setPostError(errorMessage)
      } finally {
        if (!signal.aborted) setIsPostLoading(false)
      }
    }
    
    fetchPost()
    
    return () => {
      controller.abort()
    }
}