import Footer from "./components/Footer"
import Header from "./components/Header"
import Button from "./components/Button"
import Accordion from "./components/Accordion/Accordion";



export default function App() {

  return (
    <>
    {/* <Button title="Одежда" onHui={() => setHui('Тут вся одежда')} /> */}
    
    <Accordion title="Нажми 1" text="ты нажал на 1" />
    <Accordion title="Нажми 2" text="ты нажал на 2"  />
    <Accordion title="Нажми 3" text="ты нажал на 3"  />
    </>
  )
}


