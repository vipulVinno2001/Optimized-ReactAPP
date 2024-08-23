
import './App.css';
import Accordion from './Components/Accordian/Accordion';
import Comp1 from './Components/Comp1';
import Input from './Components/RenderingProps/Input';


function App() {
  const showValue = (value) => 
    <>
           The value is {value}
    </>

    const multiply =  (value) => 
      <>
             The multiplies Value is {value* 10}
      </>
  return (
   <>
   <h1>Hello World</h1>

    {/* Composition of Component */}
  {/* <Accordion>
    <Accordion.Header>
        <button>Click Me</button>
    </Accordion.Header>
    <Accordion.Content>
       <div>
        <p>LOREM12</p>
       </div>
    </Accordion.Content>
  </Accordion> */}


  {/* HOC */}
  {/* <Comp1  /> */}

  {/* Rendering Props */}


  <Input 
  renderTextBelow = {
    showValue
   } />
   
   <br />
<Input 
  renderTextBelow = {
        multiply
   } />
   </>
  );
}

export default App;
