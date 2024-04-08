import { atom } from 'jotai'

const userAtom = atom({
  createdAt: '',
  currentmoney: 0,
  edate: '',
  email: '',
  id: '',
  savemoney: 0,
  sdate: '',
  updatedAt: '',
  username: '',
})

export const atoms = {
  userAtom,
}
