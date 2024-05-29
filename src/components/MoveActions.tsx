import styled from 'styled-components'
import { useConnectionsStore } from '../store/connections'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Action = styled.button`
  height: 44px;
  width: 44px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #77d3f5;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`

export function MoveActions() {
  const addAll = useConnectionsStore((state) => state.addAll)
  const removeAll = useConnectionsStore((state) => state.removeAll)
  const add = useConnectionsStore((state) => state.add)
  const remove = useConnectionsStore((state) => state.remove)

  const disableAddAll = useConnectionsStore(
    (state) => state.available.length === 0,
  )
  const disableRemoveAll = useConnectionsStore(
    (state) => state.chosen.length === 0,
  )
  const disableAdd =
    useConnectionsStore((state) => state.selectedAvailable.length === 0) ||
    disableAddAll
  const disableRemove =
    useConnectionsStore((state) => state.selectedChosen.length === 0) ||
    disableRemoveAll

  return (
    <Container>
      <Action onClick={addAll} disabled={disableAddAll}>
        {'>>'}
      </Action>
      <Action onClick={add} disabled={disableAdd}>
        {'>'}
      </Action>
      <Action onClick={remove} disabled={disableRemove}>
        {'<'}
      </Action>
      <Action onClick={removeAll} disabled={disableRemoveAll}>
        {'<<'}
      </Action>
    </Container>
  )
}
