import React from 'react'

const Person = ({person,handlePerson}) => {
  return (
    <div>
        <div className='flex items-center justify-center mt-5 gap-4'>
          <h2 className="text-3xl">No of Person :</h2>
          <input type="text" inputMode="numeric" value={person} onChange={handlePerson} className='p-4 w-1/4 shadow-sm border rounded text-2xl' placeholder='Enter number of person' />
        </div>
    </div>
  )
}

export default Person