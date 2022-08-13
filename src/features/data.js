import {createSlice} from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: "data",
    initialState: {
        value: {},
        isFetched: false
    },
    reducers:{
        setValue: (state, action) => {
            state.value = action.payload
        },
        setFetch: (state, action) => {
            state.isFetched = action.payload
        }
    }
})

export const {setValue, setFetch} = dataSlice.actions
export default dataSlice.reducer