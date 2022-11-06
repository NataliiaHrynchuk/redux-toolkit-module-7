import { configureStore } from "@reduxjs/toolkit";
import { tasksReduser } from "./tasks/reducer";
import { filtersReducer } from "redux/filterSlice";


export const store = configureStore({
    reducer: {
        tasks: tasksReduser,
        filters: filtersReducer,
    },
});