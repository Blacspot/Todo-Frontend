import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
import  storage  from "redux-persist/lib/storage";
import { usersAPI } from "../features/auth/userAPI";
import { loginAPI } from "../features/auth/loginAPI";
import { todoAPI } from "../features/todo/todoAPI";


const persistConfig = {
    key: 'root',  //store data under persist:root in localstorage
    version: 1,
    storage,
    whitelist: ['user']
}

const rootReducer = combineReducers({
    [usersAPI.reducerPath] : usersAPI.reducer,
    [loginAPI.reducerPath] : loginAPI.reducer,
    [todoAPI.reducerPath] : todoAPI.reducer,
})

export const persistedReducer = persistReducer(persistConfig, rootReducer) //wraps the root reducer so redux-persist can save

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
    .concat(usersAPI.middleware) //enables rtk query catching and api request features
    .concat(loginAPI.middleware)
    .concat(todoAPI.middleware)
})

export const persistedStore = persistStore(store) //controls rehydration
export type RootState = ReturnType<typeof store.getState>