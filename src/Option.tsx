import styled from 'styled-components'

const Label = styled.label`
  display: flex;
  gap: 8px;
  padding: 4px;
  border-radius: 4px;

  &:hover {
    background-color: #9da9f0;
  }
`

export function Option() {
  return (
    <Label>
      <input type="checkbox" />
      <span>Option 1</span>
    </Label>
  )
}
