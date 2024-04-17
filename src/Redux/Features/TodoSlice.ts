import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TTodo = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: 'All' | 'High' | 'Medium' | 'Low';
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
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todo = state.todo.filter(item => item.id !== action.payload);
    },
    toggleStatus: (state, action: PayloadAction<string>) => {
      const task = state.todo.find(item => item.id === action.payload);
      task!.isCompleted = !task?.isCompleted;
    },
  },
});

export const { addTodo, removeTodo, toggleStatus } = TodoSlice.actions;

export default TodoSlice.reducer;
