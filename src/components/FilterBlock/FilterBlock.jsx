import { useFilterCurrencies } from '../../helpers/hooks/useFilter'
import './style.css'

const FilterBlock = ({ names, setNames }) => {
  const { setValue, value } = useFilterCurrencies(names, setNames)

  return (
    <div className='filter-block'>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className='filter-input'
        placeholder='USD'
        type='text'
      />
    </div>
  )
}

export default FilterBlock
