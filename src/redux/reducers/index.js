import { combineReducers } from 'redux';
import { storiesReducer } from './stories';

export const rootReducer = combineReducers({ storiesReducer });
