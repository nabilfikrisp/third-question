import { configureStore } from '@reduxjs/toolkit';
import taskListReducer from './taskListSlice';

const saveToLocalStorage = (state: unknown) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (e) {
    console.log(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

const persistedState = loadFromLocalStorage();

const store = configureStore({
  reducer: {
    taskList: taskListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  preloadedState: persistedState,
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
export type RootState = ReturnType<typeof store.getState>;
