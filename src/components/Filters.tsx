import styled from 'styled-components'
import { Collapsible } from './Collapsible'
import { connections } from '../types/Connection'

const Container = styled.div`
  flex: 2;
  border: 1px solid #464545;
  border-radius: 10px;
  padding: 10px;
  height: 100%;
`

export function Filters() {
  console.log(connections)
  return (
    <Container>
      <p>Filters</p>
      <Collapsible />
    </Container>
  )
}
