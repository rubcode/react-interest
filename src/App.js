import { useState } from 'react';
import './App.css';
import Form from './Components/form';

function App() {
  const [amount,setAmout] = useState(0)
  const [months,setMonths] = useState(0)
  const [monthly,setMonthly] = useState(0)
  const [annualRate,setAnnualRate] = useState(0)
  const [monthlyRate,setMonthlyRate] = useState(0)

  function onSubmitForm(event){
    event.preventDefault();
    console.log("hola")
  }

  return (
    <div className="App">
      <Form onSubmit={onSubmitForm}></Form>
    </div>
  );
}

export default App;
