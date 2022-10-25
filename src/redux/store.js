import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { tasksReduser } from "./tasks/reducer";
import { filtersReduser } from "./filters/reducer";
import { combineReducers } from "redux";

// const initialState = {
//   tasks: [
//     { id: 0, text: "Learn HTML and CSS", completed: true },
//     { id: 1, text: "Get good at JavaScript", completed: true },
//     { id: 2, text: "Master React", completed: false },
//     { id: 3, text: "Discover Redux", completed: false },
//     { id: 4, text: "Build amazing apps", completed: false },
//   ],
//   filters: {
//     status: "all",
//   },
// };

const rootReducer = combineReducers ({
    tasks: tasksReduser,
    filters: filtersReduser,
});

// Створюємо розширення стора, щоб додати інструменти розробника
const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);