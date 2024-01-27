import './App.css'
import { Accordion } from './components/Accordion/Accordion'
import { ArrayAccordion } from './utils/ArrayAccordion'

function App() {

  return (
    <>
      <h1>Accordion</h1>
      {
        ArrayAccordion.map((item, index) => <Accordion key={index} title={item.title} content={item.content} />)
      }
    </>
  )
}

export default App
