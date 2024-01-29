import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";


import counterReducer from "../features/counter/counterSlice"
import numberReducer from "../features/number/numberSlice"

const store = configureStore({
    reducer: {
        counter: counterReducer,
        number: numberReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger),
})

export default store