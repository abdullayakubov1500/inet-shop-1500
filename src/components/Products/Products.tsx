import { useGetProducts } from '../../services/products'
import { filterStore } from '../../store/filterStore'
import type { IProduct } from '../../types'
import Pagination from '../Pagination/Pagination'
import Search from '../Search/Search'
import Sort from '../Sort/Sort'
import s from './products.module.scss'
import ProductsItem from './ProductsItem'
import ProductsSkeleton from './ProductsSkeleton'

const Products = () => {
    const {sortValue, searchValue, currentPage, setCurrentPage, limit, offset, setOffset} = filterStore()
    const { data } = useGetProducts({sortValue, searchValue, limit, offset})
    const products = data?.results.map((elem: IProduct)=>(
                    <ProductsItem key={elem.id} {...elem}/>                    
                ))
    const skeleton = [...Array(8)].map((_, i)=>(<ProductsSkeleton key={i}/>))
    const changePage = (page: number)=>{
        setCurrentPage(page)
        setOffset(page * limit)
        window.scrollTo(0, 0)
    }
    // console.log(data);
  return (
    <div className={s.products}>
        <div className={s.products__filter}>
            <h2 className={s.products__title}>Меню</h2>
            <Sort/>
            <Search/>
        </div>
        <div className={s.products__list}>
            {
                data 
                ? 
                products 
                : 
                skeleton
            }
        </div>
        {
            data && <Pagination 
                limit={limit} 
                currentPage={currentPage} 
                changePage={changePage} 
                totalCount={data.count}/>
        }
    </div>
  )
}

export default Products