export interface ResponseBookData {
  message: string
  book: Book
}

export interface Book {
  id: number
  author: string
  genre: string
  title: string
  publicationDate: string
  totalPage: number
}

export interface ResponseReviewData {
  message: string
  reviews: Review[]
}

export interface Review {
  id: number
  rating: number
  content: string
  createdAt: string
  userId: number
  bookId: number
}

export interface Post {
  id: number
  title: string
  content: string
  imgUrl: string
  createdAt: string
  userId: number
}

export interface Comment {
  postId: number
  commentId: number
  content: string
  createdAt: string
}

export interface ResponsePostData {
  message: string
  post: Post
}

export interface ResponseCommentsData {
  message: string
  comments: Comment[]
}

export interface ResponseUserPostsData {
  message: string
  posts: Post[]
}