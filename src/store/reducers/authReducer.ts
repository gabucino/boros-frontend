import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AppThunk } from '../store'
import { RootState } from './rootReducer'

export interface AuthError {
    message: string
}

export interface AuthState {
    isAuth: boolean
    currentUser?: IUser
    isLoading: boolean
    error: AuthError
}

export const initialState: AuthState = {
    isAuth: false,
    isLoading: false,
    error: {message: 'An Error occurred'},
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoading: (state, {payload}: PayloadAction<boolean>) => {
            state.isLoading = payload
        },
        setAuthSuccess: (state, { payload }: PayloadAction<IUser>) => {
            state.currentUser = payload
            state.isAuth = true
        },
        setLogOut: (state) => {
            state.isAuth = false
            state.currentUser = undefined
        },
        setAuthFailed: (state, { payload }: PayloadAction<AuthError>) => {
            state.error = payload
            state.isAuth = false
        },
    },
})

const { actions, reducer } = authSlice

export const { setAuthSuccess, setLogOut, setLoading, setAuthFailed} = actions

export const authSelector = (state: RootState) => state.auth

export default reducer