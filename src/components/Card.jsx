import React from 'react'
import { useEffect, useState } from 'react'

const Card = ({coin_name}) => {
  const [coin, setCoin] = useState([])

  const API_URL = 'https://api.coingecko.com/api/v3/coins/';
  const API_KEY = 'x_cg_api_key=CG-M6yKaLiG8FNb7dLWscBK5Kgb';

  async function apiCaller() {
      await fetch(`${API_URL}${coin_name}?${API_KEY}`)
        .then(response => response.json())
        .then(data => setCoin(data))
  }

  useEffect(() => {
    apiCaller('bitcoin')
  }, [])

  return (
    <div className='bg-[#f3efef] w-[250px] h-[150px] grid grid-cols-2 grid-rows-2 p-4 gap-0 mx-auto rounded-lg drop-shadow-md m-4'>
        <img src={coin.image?.small} alt="" className='size-16 row-span-3 col-span-1' />
        <p className=''>
          <span className="font-bold">Bitcoin: </span>
          {coin.name || 'N/A'}
        </p>
        <p className=''>
          <span className="font-bold">Preço: </span>
          R$ {coin.market_data?.current_price?.brl || 'N/A'}
        </p>
    </div>
  )
}

export default Card