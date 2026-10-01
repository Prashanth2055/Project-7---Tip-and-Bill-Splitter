import { useState } from 'react';
import toast, {Toaster} from 'react-hot-toast'
import './App.css';
import BillInput from './components/BillInput.jsx';
import TipSelector from './components/TipSelector.jsx';
import Result from './components/Result.jsx';
import Header from './components/Header.jsx';
import Person from './components/Person.jsx';
import Calculate from './components/Calculate.jsx';

function App() {
  const [showResult,setShowResult] = useState(false)
  const [billAmount,setBillAmount] = useState("")
  const [tipPercentage,setTipPercentage] = useState("")
  const [person,setPerson] = useState("")

  const handleBillAmount = (e) => {
    const amount = e.target.value;
    setBillAmount(amount)
    setShowResult(false)
  }

  const handleTipPercentage = (e) => {
    const percentage = e.target.value;
    setTipPercentage(percentage)
    setShowResult(false)
  }

  const handlePerson = (e) => {
    const person = e.target.value;
    setPerson(person)
    setShowResult(false)
  }

  const handleCalculate = () => {
    const bill = Number(billAmount);
    const tip = Number(tipPercentage)
    const people = Number(person)

  if(billAmount === "" || bill < 0 || Number.isNaN(bill)){
      toast.error("Please enter a valid bill amount")
      return;
  }
  
  if(tipPercentage === "" || tip < 0 || Number.isNaN(tip)){
    toast.error("Please enter a valid tip percentage")
    return;
  }

  if(person === "" || people < 1 || Number.isNaN(people)){
    toast.error("Number of people must be at least 1")
    return;
  }
  
  setShowResult(true)
  }

  const handleReset = () => {
    setShowResult(false)
    setBillAmount("")
    setTipPercentage("")
    setPerson("")
  }

  const tipAmount = (Number(billAmount) * Number(tipPercentage)) / 100;
  const tipPerPerson = tipAmount / Number(person);
  const totalPerPerson = (Number(billAmount) + tipAmount) / Number(person);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Toaster toastOptions={{style: { fontSize: "20px", padding: "10px",}}} position="top-center" reverseOrder={false} />
      <Header />
      <div>

        <BillInput 
        billAmount={billAmount} 
        handleBillAmount={handleBillAmount} 
        />

        <TipSelector 
        tipPercentage={tipPercentage} 
        handleTipPercentage={handleTipPercentage} 
        setTipPercentage={setTipPercentage} 
        />

        <Person person={person} handlePerson={handlePerson} />

        <Calculate showResult={showResult} handleReset={handleReset} handleCalculate={handleCalculate} />
      </div>
      {
        showResult && 
        <Result tipPerPerson={tipPerPerson} totalPerPerson={totalPerPerson} />
      }
      </div>
  );
}

export default App;
