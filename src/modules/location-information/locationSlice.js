import { changeComponentThunk } from "modules/Modal/ModalSlice";
import MeasureResult from "./views/MeasureResult/MeasureResult";
import Measuring from "./views/Measuring/Measuring";

const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    networkProvider: 'Docomo',
    network: '4G',
}

const locationSlice = createSlice({
    initialState,
    name: 'location',
    reducers: {
        setNetworkProvider: (state, action) => {
            state.networkProvider = action.payload;

        },
        setNetwork: (state, action) => {
            state.network = action.payload;

        },
    },
    extraReducers: {},
})
export const {setNetworkProvider, setNetwork } = locationSlice.actions;

export const setNetworkProviderThunk = (payload) => (dispatch) => {
    dispatch(setNetworkProvider(payload));
};
export const setNetworkThunk = (payload) => (dispatch) => {
    dispatch(setNetwork(payload));
};
export const checkQualityNetworkThunk = (payload) => (dispatch) => {
    dispatch(changeComponentThunk(<Measuring/>))
    setTimeout(()=>{
        dispatch(changeComponentThunk(<MeasureResult/>))
    },1000)
};

const LocationReducer = locationSlice.reducer;
export default LocationReducer