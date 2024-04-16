import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TTodo = {
  title: string;
  description: string;
  isCompleted?: boolean;
};

type TInitialState = {
  todo: TTodo[];
};
const initialState: TInitialState = {
  todo: [],
};
export const TodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todo.push({ ...action.payload, isCompleted: false });
    },
  },
});

export const { addTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
