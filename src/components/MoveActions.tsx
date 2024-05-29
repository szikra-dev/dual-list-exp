import styled from 'styled-components'

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
`

export function MoveActions() {
  return (
    <Container>
      <Action>{'>>'}</Action>
      <Action>{'>'}</Action>
      <Action>{'<'}</Action>
      <Action>{'<<'}</Action>
    </Container>
  )
}
