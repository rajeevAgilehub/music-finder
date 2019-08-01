import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import { fetchMusicList } from './actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const musicList = {
    loading: false,
    data: [{
        trackName: 'asdfasdf',
        artworkUrl100: 'http://sdfafasdf.asdfasdf.asdf'
    }]
}

describe('getPosts actions', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  test('REQUEST_MUSIC_LIST, FETCH_MUSIC_LIST  successfuly fetching list', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: musicList,
      });
    });

    const expectedActions = [
      { type: 'REQUEST_MUSIC_LIST', loading: true },
      { type: 'FETCH_MUSIC_LIST', musicList: musicList },
    ];

    const store = mockStore({ musicList: {} })

    return store.dispatch(fetchMusicList('mi2')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});