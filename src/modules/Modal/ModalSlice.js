const { createSlice } = require("@reduxjs/toolkit")

const initialState={
    Component:"",
    PrevComponent:'',
    visible:false
}

const ModalSlice=createSlice({
    initialState,
    name:'modal',
    reducers:{
        changeComponent:(state,action)=>{
            state.Component=action.payload;
            state.visible=true;
        },
        openModal:(state,action)=>{
          state.visible=true
        },
        closeModal:(state,action)=>{
            state.visible=false
        },
        changePrevComponent:(state,action)=>{
            state.PrevComponent=action.payload
        }
    },
    extraReducers: {},
})
export const {changeComponent,closeModal,openModal,changePrevComponent}=ModalSlice.actions;
export const changeComponentThunk=(payload)=>(dispatch)=>{
    dispatch(changeComponent(payload))
}
export const openModalThunk = (payload) => (dispatch) => {
    dispatch(openModal(payload));
};
export const closeModalThunk = (payload) => (dispatch) => {
    dispatch(closeModal(payload));
};
export const changePrevComponentThunk = (payload) => (dispatch) => {
    dispatch(changePrevComponent(payload));
};
const ModalReducer=ModalSlice.reducer;
export default ModalReducer