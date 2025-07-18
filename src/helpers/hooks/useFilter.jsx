import { useEffect, useState } from 'react'

export const useFilterCurrencies = (names, setNames) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    const filteredCurrencies = Object.fromEntries(
      Object.entries(names).filter(
        ([key, name]) =>
          key.toLowerCase().includes(value.toLowerCase()) || name.toLowerCase().includes(value.toLowerCase()),
      ),
    )
    setNames(filteredCurrencies)
  }, [value])

  return { setValue, value }
}
