import { createReducer } from "@reduxjs/toolkit";
import { addTask, deleteTask, toggleCompleted } from "./actions";

const taskInitialState = [];

export const tasksReduser = createReducer(taskInitialState, {
    [addTask]: (state, action) => {
        return [...state, action.payload];
        },            
    [deleteTask]: (state, action) => {
            return state.filter(task => task.id !== action.payload);
        },            
    [toggleCompleted]: (state, action) => {
        return state.map(task => {
                if (task.id !== action.payload) {
                    return task;
                }
                return { ...task, completed: !task.completed };
            });
        },
});