import { createSlice } from '@reduxjs/toolkit'

const productData = [
  { id: 1, title: 'Coin purse', price: 30, emoji: '👛' },
  { id: 2, title: 'Trainers', price: 120, emoji: '👟' },
  { id: 3, title: 'Ballerina flats', price: 90, emoji: '🥿' },
  { id: 4, title: 'Sun hat', price: 75, emoji: '👒' }
]

export const products = createSlice({
  name: 'products',
  initialState: productData
})