import { configureStore } from "@reduxjs/toolkit";
import { tasksReduser } from "./tasks/reducer";
import { filtersReduser } from "./filters/reducer";


export const store = configureStore({
    reducer: {
        tasks: tasksReduser,
        filters: filtersReduser,
    },
});