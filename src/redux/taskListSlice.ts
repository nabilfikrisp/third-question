import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import randomUID from '@/functions/uid';

export interface TaskData {
  id: string;
  name: string;
  completed: boolean;
}

const initialState: TaskData[] = [];

const taskListSlice = createSlice({
  name: 'taskList',
  initialState,
  reducers: {
    addNewTask: (state, action: PayloadAction<string>) => {
      const newTask = <TaskData>{
        id: randomUID(),
        name: action.payload,
        completed: false,
      };
      state.push(newTask);
    },
    toggleComplete: (
      state,
      action: PayloadAction<{ id: string; completed: boolean }>,
    ) => {
      const { id, completed } = action.payload;
      const taskId = state.findIndex((task) => task.id === id);
      if (taskId !== -1) {
        state[taskId].completed = !completed;
      }
    },
    removeTask: (state, action: PayloadAction<string>) => {
      const taskId = state.findIndex((task) => task.id === action.payload);
      if (taskId !== -1) {
        state.splice(taskId, 1);
      }
    },
  },
});

export const { addNewTask, toggleComplete, removeTask } = taskListSlice.actions;
export default taskListSlice.reducer;
