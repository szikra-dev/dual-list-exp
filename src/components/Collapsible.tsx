import { useState } from 'react'
import styled from 'styled-components'

/**
 .collapsible {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}

.active, .collapsible:hover {
  background-color: #ccc;
}

.content {
  padding: 0 18px;
  display: none;
  overflow: hidden;
  background-color: #f1f1f1;
}
 */

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

  &:hover {
    background-color: #ccc;
  }
`

const Content = styled.div`
  padding: 0 10px;
  display: none;
  overflow: hidden;
  background-color: #f1f1f1;
`

export function Collapsible() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <CollapsibleButton onClick={() => setOpen((state) => !state)}>
        <p>Category</p>
        <span>+</span>
      </CollapsibleButton>
      <Content
        style={{
          display: open ? 'block' : 'none',
        }}
      >
        <p>Option 1</p>
        <p>Option 2</p>
        <p>Option 3</p>
      </Content>
    </div>
  )
}
