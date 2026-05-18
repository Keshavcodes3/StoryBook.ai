import { configureStore } from '@reduxjs/toolkit'

import authSlice from '../Features/Auth/Redux/auth.slice.js'
import chooseSlice from '../Features/Choose/Redux/choose.slice.js'

const store = configureStore({
    reducer: {
        auth: authSlice,
        choose: chooseSlice
    }
})

export default store