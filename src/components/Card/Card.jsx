import React from 'react'
import './style.css'

const Card = ({ balance, setBalance }) => {
  console.log('-render card')
  return (
    <div className='card'>
      <p>МИР</p>
      <button onClick={() => setBalance((prev) => prev + 100)}>Пополнить карту</button>
      <div className='card-block'>
        <p className='name'>ChudoKot</p>
        <p>${balance}</p>
      </div>
    </div>
  )
}

export default React.memo(Card)
