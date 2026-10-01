import React from 'react'

const Calculate = ({showResult,handleReset,handleCalculate}) => {
  return (
    <div>
        <div className='flex items-center justify-center mt-8 gap-4'>
          <button onClick={showResult ? handleReset : handleCalculate} className="bg-blue-500 text-white p-4 rounded transition hover:bg-blue-600 text-2xl">
         {showResult ? "Reset" : "Calculate"}
          </button>
        </div>
    </div>
  )
}

export default Calculate