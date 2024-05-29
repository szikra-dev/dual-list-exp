import { create } from 'zustand'

import { Connection, connections } from '../types/Connection'

type State = {
  available: Connection[]
  chosen: Connection[]
  selectedAvailable: string[]
  selectedChosen: string[]
}

export type Flag = 'available' | 'chosen'

type Action = {
  addAll: () => void
  removeAll: () => void
  selectOption: ({ flag, id }: { flag: Flag; id: string }) => void
  add: () => void
  remove: () => void
  resetSelection: (flag: Flag) => void
}

const initialState: State = {
  available: [...connections].sort((a, b) => a.name.localeCompare(b.name)),
  chosen: [],
  selectedAvailable: [],
  selectedChosen: [],
}

export const useConnectionsStore = create<State & Action>((set) => ({
  ...initialState,
  addAll: () =>
    set((state) => ({
      chosen: [...state.chosen, ...state.available],
      available: [],
      selectedAvailable: [],
      selectedChosen: [],
    })),
  removeAll: () =>
    set((state) => ({
      available: [...state.available, ...state.chosen].sort((a, b) =>
        a.name.localeCompare(b.name),
      ),
      chosen: [],
      selectedAvailable: [],
      selectedChosen: [],
    })),
  selectOption: ({ flag, id }: { flag: Flag; id: string }) =>
    set((state) => ({
      selectedAvailable:
        flag === 'available'
          ? state.selectedAvailable.includes(id)
            ? state.selectedAvailable.filter((i) => i !== id)
            : [...state.selectedAvailable, id]
          : state.selectedAvailable,
      selectedChosen:
        flag === 'chosen'
          ? state.selectedChosen.includes(id)
            ? state.selectedChosen.filter((i) => i !== id)
            : [...state.selectedChosen, id]
          : state.selectedChosen,
    })),
  add: () =>
    set((state) => {
      const selectedAvailable = state.selectedAvailable
      const available = state.available.filter(
        (item) => !selectedAvailable.includes(item.id),
      )
      const chosen = [
        ...state.chosen,
        ...state.available.filter((item) =>
          selectedAvailable.includes(item.id),
        ),
      ]
      return { available, chosen, selectedAvailable: [], selectedChosen: [] }
    }),
  remove: () =>
    set((state) => {
      const selectedChosen = state.selectedChosen
      const chosen = state.chosen.filter(
        (item) => !selectedChosen.includes(item.id),
      )
      const available = [
        ...state.available,
        ...state.chosen.filter((item) => selectedChosen.includes(item.id)),
      ].sort((a, b) => a.name.localeCompare(b.name))
      return { available, chosen, selectedAvailable: [], selectedChosen: [] }
    }),
  resetSelection: (flag) =>
    set((state) => ({
      selectedAvailable: flag === 'available' ? [] : state.selectedAvailable,
      selectedChosen: flag === 'chosen' ? [] : state.selectedChosen,
    })),
}))
