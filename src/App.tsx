import styled from 'styled-components'
import { Header } from './components/Header'
import { Body } from './components/Body'
import { Footer } from './components/Footer'
import { useConnectionsStore } from './store/connections'
import { useFiltersStore } from './store/filters'

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #3a3a3a;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 80%;
  border: 1px solid #464545;
  border-radius: 10px;
  background-color: #f0f0f0;
  padding: 10px;
  overflow: hidden;

  header {
    border-bottom: 1px solid #464545;
    padding: 10px;
  }

  & > div {
    padding: 10px;
    flex: 1;
  }

  footer {
    border-top: 1px solid #464545;
    padding: 10px;
  }
`

function App() {
  const store = useConnectionsStore((state) => state)
  const filters = useFiltersStore((state) => state.filters)

  console.log(store)
  console.log('filters', { filters })
  return (
    <PageContainer>
      <ContentContainer>
        <Header />
        <Body />
        <Footer />
      </ContentContainer>
    </PageContainer>
  )
}

export default App
