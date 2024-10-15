import { useEffect, useState } from 'react';
import './App.css';
import Layout from './Components/layout';
import BoxForm from './Components/box-form';
import BoxResponse from './Components/box-response';

function App() {
  const [amount,setAmount] = useState("")
  const [months,setMonths] = useState("")
  const [monthly,setMonthly] = useState("")
  const [annualRate,setAnnualRate] = useState("")
  const [monthlyRate,setMonthlyRate] = useState("")
  const [headers, setHeaders] = useState([])
  const [dataInterest, setDataInterest] = useState([])


  useEffect(() => {
    if(months !== ""){
      const monthly = parseFloat(amount / months).toFixed(2);
      setMonthly(monthly)
    }
     
  },[amount,months]);

  useEffect(() =>{
    if(annualRate !== ""){
      const monthlyRate = parseFloat(annualRate / 12 ).toFixed(2)
      setMonthlyRate(monthlyRate)
    }
    
  },[annualRate])

  
  return (
    <div className="App">
      <Layout>
        <BoxForm 
            amount={amount} 
            months={months} 
            monthly={monthly} 
            annualRate={annualRate} 
            monthlyRate={monthlyRate}
            setAmount={setAmount}
            setMonths={setMonths}
            setMonthly={setMonthly}
            setAnnualRate={setAnnualRate}
            setMonthlyRate={setMonthlyRate}
            setHeaders={setHeaders}
            setDataInterest= {setDataInterest}
          />
        <BoxResponse
          headers={headers}
          data={dataInterest}

         />
      </Layout>
    </div>
  );
}

export default App;
