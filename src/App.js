import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchBox from './components/search';
import MusicListItem from './components/musiclist';
import { fetchMusicList } from './store/actions';
import './App.css';

export class App extends React.Component {

  printMusicList = (musicList) => {
    return musicList.data.map( (item, index) => <MusicListItem key={index} item={item}/> );
  }
  
  render(){  
      return (
        <div className="App">
          <SearchBox fetchMusicList={this.props.fetchMusicList}/>
          <div className="music-list-container">
            {
              this.props.musicList.loading ? <h1 className="loader-text">Loading...</h1> : this.printMusicList(this.props.musicList)
            }
          </div>
        </div>
      );
  }
}


export function mapStateToProps(state){
  return {
    musicList: state.musicListReducer.musicList
  }
}

export function mapDispatchToProps(dispatch){
  return{
    fetchMusicList: bindActionCreators(fetchMusicList, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
