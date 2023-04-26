import { DocumentData } from 'firebase/firestore'
import { atom } from 'recoil'
import { TVShow } from '../typings'

export const modalState1 = atom({
  key: 'modalState1',
  default: false,
})

export const tvshowstate = atom<TVShow | DocumentData | null>({
  key: 'tvshowstate',
  default: null,
})