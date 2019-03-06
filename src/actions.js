import { CHANGED_SEARCH_INPUT } from './constants';

export const setSearchInput = text => {
    type: CHANGED_SEARCH_INPUT,
    payload: text
}