import { createReducer } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";
import { setStatusFilter } from "./actions";

const filtersInitialState = {
    status: statusFilters.all
};

export const filtersReduser = createReducer(filtersInitialState, {
    [setStatusFilter]: (state, action) => {
        return {
                ...state,
                status: action.payload,
            };
    }    
});