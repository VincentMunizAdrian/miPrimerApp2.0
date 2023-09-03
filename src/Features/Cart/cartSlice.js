import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "Cart",
    initialState: {
        value: {
            user: "",
            updatedAt: "",
            total: 0,
            items: [],
            id: ""
        }
    },
    reducers: {
        addCartItem: (state, action) => {
            const productExists = state.value.items.some(item => item.id === action.payload.id)

            if (productExists) {
                state.value.items = state.value.items.map(item => {
                    if (item.id === action.payload.id) {
                        item.quantity += action.payload.quantity
                        return item
                    }
                    return item
                })
            } else state.value.items.push(action.payload)

            state.value.total = state.value.items.reduce(
                (acc, currentItem) => acc += currentItem.precio * currentItem.quantity,
                0
            )

            state.value.updatedAt = new Date().toLocaleString()
                
            const idOrder = Math.floor(
                Math.random()*10000000000) 
            state.value.id =  idOrder
        },
        removeCartItem: (state, action) => {
            let newItems = state.value.items.filter(item => item.id != action.payload)
            state.value.items = [...newItems]
            state.value.total = state.value.items.reduce(
                (acc, currentItem) => acc += currentItem.precio * currentItem.quantity,
                0
            )
            state.value.updatedAt = Date.now()
        },
        setUserCart: (state, action) => {
            state.value.user = action.payload
        },
        removeFullCart: (state) => {
            state.value.items = []
            state.value.total = 0
            state.value.updatedAt = ""
            state.value.id = ""
        },
        clearUserCart: (state) => {
            state.value.user = ""
            state.value.items = []
            state.value.total = 0
            state.value.updatedAt = ""
            state.value.id = ""
        }
    }
})

export const {
    addCartItem, 
    removeCartItem, 
    setUserCart,
    removeFullCart,
    clearUserCart
} = cartSlice.actions

export default cartSlice.reducer