import { useState } from 'react'
import styled from 'styled-components'

const CollapsibleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ece9e9;
  color: #444;
  cursor: pointer;
  padding: 10px 10px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;

  border-bottom: 1px solid #ccc;

  &:hover {
    background-color: #ccc;
  }
`

const Content = styled.div`
  padding: 8px 10px;
  display: none;
  overflow: hidden;
  background-color: #ffffff;
`

type Props = {
  title: string
  children: React.ReactNode
}

export function Collapsible({ title = 'Collapsible', children }: Props) {
  const [open, setOpen] = useState(true)
  return (
    <div>
      <CollapsibleButton onClick={() => setOpen((state) => !state)}>
        <p>{title}</p>
        <span>{open ? ' - ' : ' + '}</span>
      </CollapsibleButton>
      <Content
        style={{
          display: open ? 'block' : 'none',
        }}
      >
        {children}
      </Content>
    </div>
  )
}
