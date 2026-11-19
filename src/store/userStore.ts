import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import type { IUser } from '../types'

interface IUserState {
  user: null | IUser
  setUser: (data: IUser) => void,
  logout: ()=>void
}

export const userStore = create<IUserState>()(
  devtools((set) => ({
    user: null,
    setUser: (data) => set({ user: data }),
    logout: () => set({ user: null }),
  })),
)