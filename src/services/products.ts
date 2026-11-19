import api from "./api";
import {
  useQuery,
} from '@tanstack/react-query';

interface IGetProducts {
    sortValue: string | undefined,
    searchValue: string
    limit: number,
    offset: number
}

export const useGetProducts = ({sortValue, searchValue, limit, offset} : IGetProducts)=>{
    return useQuery({
        queryKey: ['products', sortValue, searchValue, limit, offset],
        queryFn: ()=> api.get(`/products?ordering=${sortValue}&search=${searchValue}&limit=${limit}&offset=${offset}`),
        select: (resp)=> resp.data
    })
}

export const useGetPerProduct = (id: string | undefined)=>{
    return useQuery({
        queryKey: ['per-product', id],
        queryFn: ()=> api.get(`/products/${id}`),
        select: (resp)=> resp.data
    })
}