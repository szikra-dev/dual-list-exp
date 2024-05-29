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

type Props = {
  value: string
  label: string
  checked?: boolean
  onSelect: (id: string) => void
}

export function Option({ value, label, checked, onSelect }: Props) {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSelect(event.target.value)
  }
  return (
    <Label>
      <input
        type="checkbox"
        value={value}
        onChange={handleOnChange}
        checked={checked}
      />
      <span>{label}</span>
    </Label>
  )
}
