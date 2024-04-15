import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todo: {},
};
export const TodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
});

export default TodoSlice.reducer;
