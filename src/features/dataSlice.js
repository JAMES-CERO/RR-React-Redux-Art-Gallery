import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    objectId:
    apiData:
}

export const dataSlice = createSlice({
    reducer: {
        ApiState = (state, action) => {
            return {...state.apiData}
        },
        incrementID = (state, action) => {
            return {...state.apiData.value +1}
        },
        decrementID = (state, action) => {
            return {...state.apiData.value -1}
        },
        customID = (state, action) => {
            return {...state.apiData + state.apiData + state }
        },
        getHome = (state, action) => {
            return {...state.ApiState.objectId}
        }
    }
})

export const {ApiState, incrementID, decrementID, customID, getHome} = dataSlice.actions

export default dataSlice.reducer

