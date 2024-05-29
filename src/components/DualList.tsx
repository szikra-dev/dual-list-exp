import styled from 'styled-components'
import { ListSection } from './ListSection'
import { MoveActions } from './MoveActions'

const Container = styled.div`
  display: flex;
  flex: 6;
  border: 1px solid #464545;
  border-radius: 10px;
  padding: 10px;
  height: 100%;

  .list {
    flex: 1;
    background-color: lime;
  }

  .actions {
    margin: 0 20px;
  }
`

export function DualList() {
  return (
    <Container>
      <div className="list">
        <ListSection header="Not visible to these Connections" />
      </div>
      <div className="actions">
        <MoveActions />
      </div>
      <div className="list">
        <ListSection header="Visible to these Connections" />
      </div>
    </Container>
  )
}
