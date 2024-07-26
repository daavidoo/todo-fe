import { TodoItem } from './todo-item.model'

export interface Todo {
  id: string
  title: string
  items: TodoItem[]
}
