import type { FC } from 'react';
import ReactPaginate from 'react-paginate';
import s from './pagination.module.scss'

interface IPagination {
    totalCount: number,
    changePage: (page: number)=>void,
    limit: number,
    currentPage: number
}

const Pagination: FC<IPagination> = ({totalCount, changePage, limit, currentPage}) => {
    const ReactPaginateComponent = (ReactPaginate as unknown as { default: typeof ReactPaginate }).default
    const total = Math.ceil(totalCount / limit)
  return (
     <ReactPaginateComponent
        breakLabel="..."
        nextLabel=">"
        onPageChange={(page)=>{ changePage(page.selected);}}
        pageRangeDisplayed={3}
        pageCount={total}
        previousLabel="<"
        className={s.pagination}
        activeClassName={s.active}
        forcePage={currentPage}
      />
  )
}

export default Pagination