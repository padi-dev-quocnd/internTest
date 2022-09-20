const { createSlice } = require("@reduxjs/toolkit")

const initialState={
    open:false,
    dateValue:''
}

const DatePickerSlice=createSlice({
    initialState,
    name:'datePicker',
    reducers:{
        setDate:(state,action)=>{
            state.dateValue=action.payload
        },
        openDatePicker:(state)=>{
            state.open=true
        },
        closeDatePicker:(state)=>{
            state.open=false
        }
    },
    extraReducers: {},
})
export const {setDate,openDatePicker,closeDatePicker}=DatePickerSlice.actions;
export const setDateThunk = (payload) => (dispatch) => {
    dispatch(setDate(payload))
}
const DatePickerReducer=DatePickerSlice.reducer;
export default DatePickerReducer