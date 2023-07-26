import { createSlice } from "@reduxjs/toolkit";
import Products from '../../Data/products.json'

export const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        value: {
            allProducts: Products,
            productsSelected: [],
            categorySelected: '',
            productSelected: {},
            idSelected: '',
        }
    },
    reducers: {
        setCategorySelected: (state, action) => {
            state.value.productsSelected = state.value.allProducts.filter(product => product.category === action.payload)
            state.value.categorySelected = action.payload
        },
        setIdSelected: (state, action) => {
            // state.value.productSelected = state.value.allProducts.find(product => product.id === action.payload)
            // state.value.productSelected = action.payload
            state.value.productSelected = state.value.allProducts.filter(product => product.id === action.payload)
            state.value.idSelected = action.payload
        }
    }
})

export const {setCategorySelected, setIdSelected} = shopSlice.actions

export default shopSlice.reducer