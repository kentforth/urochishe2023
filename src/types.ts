import { CollectionReference, DocumentData } from 'firebase/firestore'

export interface IRider extends CollectionReference, DocumentData {
  age: number | string | null
  name: string
  city: string
  phone: string
  gender: string
  number: number
  isAgree: boolean
  position: number | string
  category: string
  lastName: string
  bicycleType: string
}

export interface ICheckbox {
  id: number
  title: string
}
