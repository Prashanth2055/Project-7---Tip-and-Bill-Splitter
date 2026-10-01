import React from 'react'

const Result = ({tipPerPerson, totalPerPerson}) => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center mt-8 text-3xl gap-4'>
          <p>Tips per Person is ${tipPerPerson.toFixed(2)}</p>
          <p>Total per Person is ${totalPerPerson.toFixed(2)}</p>
        </div>
    </div>
  )
}

export default Result