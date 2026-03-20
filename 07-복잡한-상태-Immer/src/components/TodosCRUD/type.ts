export interface Metadata {
  createdAt: string
  updatedAt: string | null
}

export interface Todo {
  id: string
  text: string | FormDataEntryValue
  done: boolean
  metadata: Metadata
}