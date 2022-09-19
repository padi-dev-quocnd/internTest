const { createSlice } = require("@reduxjs/toolkit")

const initialState={
    dateValue:''
}

const DatePickerSlice=createSlice({
    initialState,
    name:'datePicker',
    reducers:{
        setDate:(state,action)=>{
            state.dateValue=action.payload
        }
    },
    extraReducers: {},
})
export const {setDate}=DatePickerSlice.actions;
export const setDateThunk = (payload) => (dispatch) => {
    dispatch(setDate(payload))
}
const DatePickerReducer=DatePickerSlice.reducer;
export default DatePickerReducer