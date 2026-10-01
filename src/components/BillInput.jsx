import React from 'react'

const BillInput = ({billAmount,handleBillAmount}) => {
  return (
    <div className='flex items-center justify-center mt-12 gap-4'>
          <h2 className="text-3xl">Bill Amount :</h2>
          <input type='text' inputMode='numeric' value={billAmount} onChange={handleBillAmount} className='p-4 w-1/4 shadow-sm border rounded text-2xl' placeholder='Enter the bill amount' />
    </div>
  )
}

export default BillInput