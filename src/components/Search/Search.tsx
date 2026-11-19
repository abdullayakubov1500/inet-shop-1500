import React, { useState } from 'react'
import { searchclose, searchIcon } from '../../utils'
import s from './search.module.scss'
import { filterStore } from '../../store/filterStore'

const Search = () => {
  const { setSearchValue } = filterStore()
  const [searchText, setSearchText] = useState('')
  const confirm = (event: React.FormEvent)=>{
    event.preventDefault();
    setSearchValue(searchText)
  }
  const reset =()=>{
    setSearchValue('');
    setSearchText('')
  }
  return (
    <form className={s.search} onSubmit={confirm}>
      <button className={s.search__btn}>
        <img src={searchIcon} alt="" />
      </button>
      <input 
        type="text" 
        className={s.search__input} 
        placeholder='Введите блюдо или состав'
        value={searchText}
        onChange={(event)=>{setSearchText(event.target.value)}}
        />
        {
          searchText && <img src={searchclose} alt="" className={s.search__clear} onClick={reset} />          
        }
    </form>
  )
}

export default Search