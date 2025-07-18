import style from './style.module.css'
import Card from '../../components/Card/Card'
import RateList from '../../components/RateList/RateList'
import FilterBlock from '../../components/FilterBlock/FilterBlock'

const Main = ({ balance, setBalance, rates, names, setNames, filteredNames }) => {
  return (
    <main className={style.main}>
      <Card balance={balance} setBalance={setBalance} />
      <FilterBlock names={names} setNames={setNames} />
      {Object.keys(filteredNames).length > 0 ? <RateList rates={rates} names={filteredNames} /> : <p>Loading...</p>}
    </main>
  )
}

export default Main
