import { useState } from 'react';
import Select from 'react-select';
import { filterStore } from '../../store/filterStore';
interface IOption {
  value: string 
  label: string
}

const options: IOption[] = [
  { value: 'price', label: 'По цене' },
  { value: 'rating', label: 'По рейтингу' },
  { value: 'title', label: 'По заголовку' },
];

const Sort = () => {
  const {setSortValue} = filterStore()
  const [selectedOption, setSelectedOption] = useState<IOption | null>(null)
  const handleChange = (optionSelected: IOption | null)=>{
    setSelectedOption(optionSelected)
    setSortValue(optionSelected?.value)
    // console.log(optionSelected);
  }
  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
      placeholder='Сортировать по:'
    />
  )
}

export default Sort