import { useEffect, useState } from 'react';
import './App.css';
import Layout from './Components/layout';
import BoxForm from './Components/box-form';
import BoxResponse from './Components/box-response';

function App() {
  const [amount,setAmount] = useState(0)
  const [months,setMonths] = useState(0)
  const [monthly,setMonthly] = useState(0)
  const [annualRate,setAnnualRate] = useState(0)
  const [monthlyRate,setMonthlyRate] = useState(0)

  useEffect(() => {
    if(months !== 0){
      const monthly = parseFloat(amount / months).toFixed(2);
      setMonthly(monthly)
    }
     
  },[amount,months]);

  useEffect(() =>{
    if(annualRate !== 0){
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
          />
        <BoxResponse />
      </Layout>
    </div>
  );
}

export default App;
