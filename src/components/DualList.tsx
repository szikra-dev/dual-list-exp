import styled from 'styled-components'
import { ListSection } from './ListSection'
import { MoveActions } from './MoveActions'
import { Flag, useConnectionsStore } from '../store/connections'
import { useFiltersStore } from '../store/filters'

const Container = styled.div`
  display: flex;
  flex: 6;
  border-radius: 10px;
  padding: 10px;
  height: 100%;

  .list {
    flex: 1;
  }

  .actions {
    padding-top: 116px;
    margin: 0 20px;
  }
`

export function DualList() {
  const available = useConnectionsStore((state) => state.available)
  const chosen = useConnectionsStore((state) => state.chosen)

  const setFilter = useFiltersStore((state) => state.setFilter)
  const { searchChosen, searchAvailable, groups } = useFiltersStore(
    (state) => state.filters,
  )

  const handleSearch = (value: string, flag: Flag) => {
    const filter = flag === 'available' ? 'searchAvailable' : 'searchChosen'
    setFilter(filter, value)
  }

  const availableItems = available.filter((item) =>
    item.name.toLowerCase().includes(searchAvailable),
  )
  //.filter((item) => item.groupIds.some((groupId) => groups.includes(groupId)))

  const chosenItems = chosen.filter((item) =>
    item.name.toLowerCase().includes(searchChosen),
  )

  const filteredByGroupsItems = availableItems.filter((item) =>
    item.groupIds.some((groupId) => groups.includes(groupId)),
  )

  console.log(
    'availableItems',
    availableItems.map((item) => item.groupIds),
  )
  console.log('filteredByGroupsItems', filteredByGroupsItems)

  return (
    <Container>
      <div className="list">
        <ListSection
          header="Not visible to these Connections"
          items={availableItems}
          key={'left'}
          flag="available"
          onSearch={handleSearch}
        />
      </div>
      <div className="actions">
        <MoveActions />
      </div>
      <div className="list">
        <ListSection
          header="Visible to these Connections"
          items={chosenItems}
          key={'right'}
          flag="chosen"
          onSearch={handleSearch}
        />
      </div>
    </Container>
  )
}
