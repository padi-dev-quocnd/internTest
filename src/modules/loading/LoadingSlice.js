import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = { loading: false };
const loadingSlices = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      console.log({ state, action });
      state.loading = action.payload;
    },
  },
  extraReducers: {},
});
//actions
export const loadingActions = loadingSlices.actions;
export const { setLoading } = loadingActions;
//thunks
export const setLoadingThunk = (payload) => (dispatch) => {
  dispatch(setLoading(payload));
};

// useSelector
export const useLoadingSelector = (state) => state.loading.loading;

//reducer
const loadingReducer = loadingSlices.reducer;
export default loadingReducer;
