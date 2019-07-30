import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMusicList } from './store/actions';
import SearchBox from './components/search';
import './App.css';

class App extends React.Component {

  componentDidMount() {
    //this.props.fetchMusicList()
  }

  printMusicList = (musicList) => {
    console.log(musicList.data);
    return musicList.data.map(item=>{
      return(
        <div className="song-card">
          <div className="song-info">
            <div className="song-img">
              <img src={item.artworkUrl100} alt={item.trackName.substring(0,7).concat('...')}/>
            </div>
            <div className="song-detail">
              <div className="song-title">{item.trackName}</div>
              <div className="more-link"><a href="#">More</a></div>
            </div>
          </div>
        </div>
      )
    });
     
    
  }
  
  render(){  
      return (
        <div className="App">
          <SearchBox />
          <div className="music-list-container">
            {
              this.props.musicList.loading ? <h1>Loading...</h1> : this.printMusicList(this.props.musicList)
            }
          </div>
        </div>
      );
  }
}


function mapStateToProps(state){
  return {
    musicList: state.musicListReducer.musicList
  }
}

function mapDispatchToProps(dispatch){
  return{
    fetchMusicList: bindActionCreators(fetchMusicList, dispatch),
  }
}


export default connect(mapStateToProps, null)(App);
