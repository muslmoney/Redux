import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [1, 2, 3, 4]
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    show(state, action) {
      console.log('ok');
    },
    todoItem(state, action) {
      console.log(state.items[action.payload.id]);
    }
  }
});

export const { show, todoItem } = todoSlice.actions;
export default todoSlice.reducer