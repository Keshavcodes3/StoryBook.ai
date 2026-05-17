import { configureStore } from '@reduxjs/toolkit'

import authSlice from '../Features/Auth/Redux/auth.slice.js'

const store = configureStore({
    reducer: {
        auth: authSlice
    }
})

export default store