'use client'

import { use } from 'react'

export interface User {
  id: number
  username: string
  email: string
  phone: string
  address: string
  createdAt: string
}

interface ResponseUsersData {
  users: User[]
  message: string
  page: number
  limit: number
  hasNextPage: boolean
}

interface Props {
  usersPromise: Promise<ResponseUsersData>
}

export default function UserList({ usersPromise }: Props) {
  const { users } = use(usersPromise)

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <p>{user.username}</p>
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </li>
      ))}
    </ul>
  )
}