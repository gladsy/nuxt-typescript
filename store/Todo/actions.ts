import { ActionTree } from 'vuex'
import { TodosState, RootState, Todo } from '@/store/types'

const actions: ActionTree<TodosState, RootState> = {
  add: async ({ commit }, todo: Todo) => {
    if (await someAsyncAddMethod(todo)) {
      commit('add', todo)
      return true
    }
    return false
  },
  remove: async ({ commit }, id: string) => {
    if (await someAsyncRemoveMethod(id)) {
      commit('remove', id)
      return true
    }
    return false
  }
}

export default actions
