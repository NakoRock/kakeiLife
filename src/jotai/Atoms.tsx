import { atom } from 'jotai'

export const userAtom = atom({
  currentmoney: 0,
  edate: 0,
  email: '',
  id: '',
  savemoney: 0,
  sdate: 0,
  username: '',
})
export const loadAtom = atom(false)
