import React from 'react'

const TipSelector = ({tipPercentage,handleTipPercentage,setTipPercentage}) => {
  return (
    <>
    <div className='flex items-center justify-center mt-5 gap-4'>
          <h2 className="text-3xl">Tip Percentage :</h2>
          <input type="text" inputMode="numeric" value={tipPercentage} onChange={handleTipPercentage}  className='p-4 w-1/4 shadow-sm border rounded text-2xl' placeholder='Enter the tip percentage' />
        </div>
        <div className='flex items-center justify-center mt-8 gap-4'>
          <h2 className="text-3xl">Select the Tip Percentage</h2>
        </div>
        <div className='flex items-center justify-center mt-5 gap-4'>
          <button onClick={() => setTipPercentage(5)} className="bg-blue-500 text-white p-3 rounded-lg text-2xl" >5 %</button>
          <button onClick={() => setTipPercentage(10)} className="bg-blue-500 text-white p-3 rounded-lg text-2xl">10 %</button>
          <button onClick={() => setTipPercentage(15)} className="bg-blue-500 text-white p-3 rounded-lg text-2xl">15 %</button>
          <button onClick={() => setTipPercentage(20)} className="bg-blue-500 text-white p-3 rounded-lg text-2xl">20 %</button>
          <button onClick={() => setTipPercentage(25)} className="bg-blue-500 text-white p-3 rounded-lg text-2xl">25 %</button>
          <button onClick={() => setTipPercentage(30)} className="bg-blue-500 text-white p-3 rounded-lg text-2xl">30 %</button>
        </div>
    </>
  )
}

export default TipSelector