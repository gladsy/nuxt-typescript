export interface RootState {
  version: string
}

export interface TodosState {
  todos: Todo[]
}

export interface Todo {
  id: string
  done: boolean
  text: string
}
