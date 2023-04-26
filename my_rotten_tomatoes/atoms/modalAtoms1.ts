import { DocumentData } from 'firebase/firestore'
import { atom } from 'recoil'
import { TVShow } from '../typings'

export const modalState = atom({
  key: 'modalState',
  default: false,
})

export const tvshowstate = atom<TVShow | DocumentData | null>({
  key: 'tvshowstate',
  default: null,
})