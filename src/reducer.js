import { CHANGED_SEARCH_INPUT } from './constants';

const initialState = {
    searchInput: ''
}

export const SearchRobots = (state = initialState, action = {}) => {
    switch (action.type) {
        case: CHANGED_SEARCH_INPUT:
            return { ...state, searchInput: action.payload}
        default:
            return state;
    }
}