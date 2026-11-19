import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface IFilterStore {
 sortValue: string | undefined,
 setSortValue: (val: string | undefined)=>void,
 searchValue: string,
 setSearchValue: (val: string)=>void
 currentPage: number,
 setCurrentPage: (val: number)=>void,
 limit: number,
 offset: number
 setOffset: (val: number)=>void
}

export const filterStore = create<IFilterStore>()(
  devtools((set) => ({
   sortValue: '',
   setSortValue: (val)=> set({sortValue: val}),
   searchValue: '',
   setSearchValue: (val)=> set({searchValue: val}),
    currentPage: 0,
   setCurrentPage: (val)=> set({currentPage: val}),
    limit: 8,
    offset: 0,
    setOffset: (val)=> set({offset: val})
  })),
)