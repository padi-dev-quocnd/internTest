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
        changeComponentViewBot:(state,action)=>{
            state.CompnentModalViewBot=action.payload;
            state.visibleInBot=true;
        },
        openModal:(state,action)=>{
          state.visible=true
        },
        openModalViewBot:(state,action)=>{
            state.visibleInBot=true
          },
          closeModal:(state,action)=>{
            state.visible=false
          },
        closeModalViewBot:(state,action)=>{
            state.visibleInBot=false
        },
        changePrevComponent:(state,action)=>{
            state.PrevComponent=action.payload
        }
    },
    extraReducers: {},
})
export const {changeComponent,changeComponentViewBot,closeModalViewBot,openModalViewBot,closeModal,openModal,changePrevComponent}=ModalSlice.actions;
export const changeComponentThunk=(payload)=>(dispatch)=>{
    dispatch(changeComponent(payload))
}
export const changeComponentViewBotThunk=(payload)=>(dispatch)=>{
    dispatch(changeComponentViewBot(payload))
}
export const openModalThunk = (payload) => (dispatch) => {
    dispatch(openModal(payload));
};
export const openModalViewBotThunk = (payload) => (dispatch) => {
    dispatch(openModalViewBot(payload));
};
export const closeModalThunk = (payload) => (dispatch) => {
    dispatch(closeModal(payload));
};
export const closeModalViewBotThunk = (payload) => (dispatch) => {
    dispatch(closeModalViewBot(payload));
};
export const changePrevComponentThunk = (payload) => (dispatch) => {
    dispatch(changePrevComponent(payload));
};
const ModalReducer=ModalSlice.reducer;
export default ModalReducer