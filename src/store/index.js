import { configureStore } from '@reduxjs/toolkit'
import auth from './auth'
import itemsSlice from './items'
import usersSlice from './users'
import favoriteSlice from './favorite'
import commentsSlice from './comments'
import cartsSlice from './cart'

// import favSlice from './favorite'
const store = configureStore({
    reducer:{
        authSlice:auth,
        commentsSlice,
        itemsSlice,
        usersSlice,
        cartsSlice,
        favoriteSlice,
    }
})

export default store