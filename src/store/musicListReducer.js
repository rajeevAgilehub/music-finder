import { FETCH_MUSIC_LIST, REQUEST_MUSIC_LIST } from './actions';

export function musicListReducer(state = { musicList: {loading: false, data: []} }, action) {
    switch(action.type){
        case REQUEST_MUSIC_LIST:
            return  {...state, musicList: {loading: action.loading} }
        case FETCH_MUSIC_LIST:
            return  {...state, musicList: {loading: false, data: action.musicList} }
        default: 
            return state;
    }
}


