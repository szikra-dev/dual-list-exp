import { create } from 'zustand'

type Filters = {
  groups: string[]
  priceTypes: string[]
  salesRepresentatives: string[]
  searchAvailable: string
  searchChosen: string
}

export type FilterType = keyof Filters

type State = {
  filters: Filters
}

type Action = {
  setFilter: (filter: FilterType, value: string) => void
}

const initialState: State = {
  filters: {
    groups: [],
    priceTypes: [],
    salesRepresentatives: [],
    searchAvailable: '',
    searchChosen: '',
  },
}

export const useFiltersStore = create<State & Action>((set) => ({
  ...initialState,
  setFilter: (filter, value) =>
    set((state) => {
      if (filter === 'searchAvailable') {
        return {
          filters: {
            ...state.filters,
            searchAvailable: value.toLowerCase(),
          },
        }
      }

      if (filter === 'searchChosen') {
        return {
          filters: {
            ...state.filters,
            searchChosen: value.toLowerCase(),
          },
        }
      }

      const values = state.filters[filter]

      if (values.includes(value)) {
        return {
          filters: {
            ...state.filters,
            [filter]: values.filter((v) => v !== value),
          },
        }
      }

      return {
        filters: {
          ...state.filters,
          [filter]: [...values, value],
        },
      }
    }),
}))
