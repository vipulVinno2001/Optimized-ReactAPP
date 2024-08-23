
import './App.css';
import Accordion from './Components/Accordian/Accordion';


function App() {
  return (
   <>
   <h1>Hello World</h1>
  <Accordion>
    <Accordion.Header>
        <button>Click Me</button>
    </Accordion.Header>
    <Accordion.Content>
       <div>
        <p>LOREM12</p>
       </div>
    </Accordion.Content>
  </Accordion>
   </>
  );
}

export default App;
