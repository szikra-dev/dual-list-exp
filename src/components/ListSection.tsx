import styled from 'styled-components'
import { Connection } from '../types/Connection'
import { Option } from './Option'
import { Flag, useConnectionsStore } from '../store/connections'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
`

const SearchInput = styled.input`
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
`

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  flex: 1;
  overflow-y: auto;
`

type Props = {
  header?: string
  items: Connection[]
  flag: Flag
  onSearch: (value: string, flag: Flag) => void
}

export function ListSection({
  header = 'Section',
  items = [],
  flag,
  onSearch,
}: Props) {
  const selectOption = useConnectionsStore((state) => state.selectOption)
  const selectedAvailable = useConnectionsStore(
    (state) => state.selectedAvailable,
  )
  const selectedChosen = useConnectionsStore((state) => state.selectedChosen)
  const resetSelection = useConnectionsStore((state) => state.resetSelection)

  const handleSelect = (id: string) => {
    selectOption({ flag, id })
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value, flag)
  }

  return (
    <Container>
      <p>{header}</p>
      <SearchInput
        type="text"
        placeholder="Type in Connection name"
        onChange={handleSearch}
      />
      <OptionsContainer>
        {items.map((item) => (
          <Option
            key={item.id}
            value={item.id}
            label={item.name}
            onSelect={handleSelect}
            checked={
              (flag === 'available' && selectedAvailable.includes(item.id)) ||
              (flag === 'chosen' && selectedChosen.includes(item.id))
            }
          />
        ))}
      </OptionsContainer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <small>Count: {items.length}</small>
        <button onClick={() => resetSelection(flag)}>Clear Selection</button>
      </div>
    </Container>
  )
}
