import axios from 'axios';
export const REQUEST_MUSIC_LIST = 'REQUEST_MUSIC_LIST';
export const FETCH_MUSIC_LIST = 'FETCH_MUSIC_LIST';

export const fetchMusicList = (searchText) => (dispatch, getState) => {
    let searchTerm = searchText || 'mi2';

    dispatch({type: REQUEST_MUSIC_LIST, loading: true});

    loadMusicList(searchTerm).then(result => {    
        dispatch( ({type: FETCH_MUSIC_LIST, musicList: result.data.results }) );
    }).catch((err) => {
        console.error.bind(err);
    });

}

function loadMusicList(searchTerm){  
    let url = `https://itunes-search-iypahdbpmn.now.sh/api/search?media=all&term=${searchTerm}`;
    return axios.get(url);
};
 