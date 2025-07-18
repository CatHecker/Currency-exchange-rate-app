import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Main from './pages/Main/Main'
import { get_rates } from './api/api'
import { get_names } from './api/get_name'
import { NamesContext } from './context/NamesContext'

function App() {
  const [balance, setBalance] = useState(5000)
  const [rates, setRates] = useState([])
  const [names, setNames] = useState([])
  const [filteredNames, setFilteredNames] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await get_rates()
      const names = await get_names()
      setRates(data)
      setNames(names)
      setFilteredNames(names)
    }
    fetchData()
  }, [])

  return (
    <>
      <NamesContext.Provider value={{ names, filteredNames }}>
        <Header />
        <Main
          filteredNames={filteredNames}
          balance={balance}
          setBalance={setBalance}
          rates={rates}
          names={names}
          setRates={setRates}
          setNames={setFilteredNames}
        />
      </NamesContext.Provider>
    </>
  )
}

export default App
