import styled from 'styled-components'
import { Collapsible } from './Collapsible'
import {
  availableGroups,
  availablePriceTypes,
  availableSalesRepresentatives,
} from '../types/Connection'
import { Option } from './Option'
import { FilterType } from '../store/filters'

const Container = styled.div`
  flex: 2;
  border: 1px solid #464545;
  border-radius: 10px;
  padding: 10px;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

type Props = {
  onSelectFilter: (filter: FilterType, value: string) => void
}

export function Filters({ onSelectFilter }: Props) {
  return (
    <Container>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <p>Filters</p>
        <button>Reset</button>
      </div>
      <Collapsible title={'Customer Group'}>
        {availableGroups.map(({ id, name }) => (
          <Option
            key={id}
            value={id}
            label={name}
            onSelect={() => onSelectFilter('groups', id)}
          />
        ))}
      </Collapsible>
      <Collapsible title={'Price Type'}>
        {availablePriceTypes.map(({ id, currency: { name } }) => (
          <Option
            key={id}
            value={id}
            label={name}
            onSelect={() => onSelectFilter('priceTypes', id)}
          />
        ))}
      </Collapsible>
      <Collapsible title={'Sales Representative'}>
        {availableSalesRepresentatives.map(({ id, name }) => (
          <Option
            key={id}
            value={id}
            label={name}
            onSelect={() => onSelectFilter('salesRepresentatives', id)}
          />
        ))}
      </Collapsible>
    </Container>
  )
}
