import React from 'react'

const Chart = () => {
  return (
    <div className='bg-[#f3efef] w-[200px] grid grid-cols-2 grid-rows-2 p-4 gap-0 mx-auto rounded-lg'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png" alt="" className='size-12 row-span-3' />
        <p className='font-bold'>Bitcoin</p>
        <p className='font-bold'>Valor:</p>
    </div>
  )
}

export default Chart