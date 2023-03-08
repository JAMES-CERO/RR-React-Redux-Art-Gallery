import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    objectId: 10245,
    apiData:{}
}

export const dataSlice = createSlice({
    reducer: {
        ApiState : (state, action) => {
            return {...state, apiData: action.payload}
        },
        incrementID : (state) => {
            return {...state, objectId: state.objectId +1}
        },
        decrementID : (state) => {
            return {...state, objectId: state.payload -1}
        },
        inputID : (state, action) => {
            return {...state, objectId: action.payload }
        },
        clearData : () => {
            return {...initialState}
        }
    }
})

export const {ApiState, incrementID, decrementID, inputID, clearData} = dataSlice.actions

export default dataSlice.reducer

