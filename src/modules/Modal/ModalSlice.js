const { createSlice } = require("@reduxjs/toolkit")

const initialState={
    Component:"",
    CompnentModalViewBot:'',
    PrevComponent:'',
    visible:false,
    visibleInBot:false,
}

const ModalSlice=createSlice({
    initialState,
    name:'modal',
    reducers:{
        changeComponent:(state,action)=>{
            state.Component=action.payload;
            state.visible=true;
        },
        changeComponentInBot:(state,action)=>{
            state.CompnentModalViewBot=action.payload;
            state.visibleInBot=true;
        },
        openModal:(state,action)=>{
          state.visible=true
        },
        openModalInBot:(state,action)=>{
            state.visibleInBot=true
          },
          closeModal:(state,action)=>{
            state.visible=false
          },
        closeModalInBot:(state,action)=>{
            state.visibleInBot=false
        },
        changePrevComponent:(state,action)=>{
            state.PrevComponent=action.payload
        }
    },
    extraReducers: {},
})
export const {changeComponent,changeComponentInBot,closeModalInBot,openModalInBot,closeModal,openModal,changePrevComponent}=ModalSlice.actions;
export const changeComponentThunk=(payload)=>(dispatch)=>{
    dispatch(changeComponent(payload))
}
export const changeComponentInBotThunk=(payload)=>(dispatch)=>{
    dispatch(changeComponentInBot(payload))
}
export const openModalThunk = (payload) => (dispatch) => {
    dispatch(openModal(payload));
};
export const openModalInBotThunk = (payload) => (dispatch) => {
    dispatch(openModalInBot(payload));
};
export const closeModalThunk = (payload) => (dispatch) => {
    dispatch(closeModal(payload));
};
export const closeModalInBotThunk = (payload) => (dispatch) => {
    dispatch(closeModalInBot(payload));
};
export const changePrevComponentThunk = (payload) => (dispatch) => {
    dispatch(changePrevComponent(payload));
};
const ModalReducer=ModalSlice.reducer;
export default ModalReducer