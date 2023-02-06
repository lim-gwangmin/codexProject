import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const initialState = {
   fireBaseToken: '',
};

export const SliceReducer = createSlice({
  name: 'sliceReducer',
  initialState,
  reducers: {
      webPushToken: ( state, action ) => {
         state.fireBaseToken = action.payload; 
      },
   },
});
// actions
export const { 
   webPushToken,
} = SliceReducer.actions;



export default SliceReducer.reducer;