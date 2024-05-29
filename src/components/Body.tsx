import styled from 'styled-components'
import { Filters } from './Filters'
import { DualList } from './DualList'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
`

const Content = styled.div`
  display: flex;
  gap: 10px;
  height: 100%;
`

export function Body() {
  return (
    <div>
      <Container>
        <p>Linesheet visibility</p>
        <Content>
          <Filters />
          <DualList />
        </Content>
      </Container>
    </div>
  )
}
