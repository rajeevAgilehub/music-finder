import { combineReducers } from 'redux';
import {  createStore } from 'redux';
import { musicListReducer } from './musicListReducer';

const rootReducer = combineReducers({
    musicListReducer
});
let store = createStore(rootReducer)

test('store reduer', ()=>{
    expect(store.getState().musicListReducer.musicList.data).toEqual([]);
});