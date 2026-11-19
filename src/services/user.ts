import type { ILogin, IRegister } from "../types";
import api from "./api";
import {
  useQuery,
  useMutation,  
} from '@tanstack/react-query';

export const useRegisterMutation = ()=>{
    return useMutation({
        mutationFn: (data: IRegister)=> api.post('/auth/register', data)
    })
}

export const useLoginMutation = ()=>{
    return useMutation({
        mutationFn: (data: ILogin)=> api.post('/auth/login', data),
        onSuccess: ({data})=>{
            if (data && data.access) {
                localStorage.setItem('access_token', data.access)
                localStorage.setItem('refresh_token', data.refresh)
            }
            // console.log(data);
        }
    })
}

export const useCurrentUser = ()=>{
    const access_token = localStorage.getItem('access_token')
    return useQuery({
        queryKey: ['current'],
        queryFn: ()=> api.get('/auth/users/profile'),
        enabled: !!access_token,
        select: (resp)=> resp.data
    })
}