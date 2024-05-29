import styled from 'styled-components'
import { Filters } from './Filters'
import { DualList } from './DualList'
import { FilterType, useFiltersStore } from '../store/filters'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
`

const Content = styled.div`
  display: flex;
  gap: 10px;
  height: 550px;
`

export function Body() {
  const setFilter = useFiltersStore((state) => state.setFilter)

  const handleSelectFilter = (filter: FilterType, value: string) => {
    setFilter(filter, value)
  }

  return (
    <Container>
      <p>Linesheet visibility</p>
      <Content>
        <Filters onSelectFilter={handleSelectFilter} />
        <DualList />
      </Content>
    </Container>
  )
}
