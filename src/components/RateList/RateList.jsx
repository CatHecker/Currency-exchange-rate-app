import { useContext } from 'react'
import './style.css'
import { NamesContext } from '../../context/NamesContext'

const RateList = ({ rates }) => {
  const namesContext = useContext(NamesContext)
  const { filteredNames } = namesContext
  return (
    <ul className='rate-list'>
      {Object.keys(filteredNames).map((rate) => {
        return (
          <li className='currency' key={rate}>
            <div>{rate + ' ' + filteredNames[rate]}</div>
            <div>{rates[rate]} EUR</div>
          </li>
        )
      })}
    </ul>
  )
}

export default RateList
