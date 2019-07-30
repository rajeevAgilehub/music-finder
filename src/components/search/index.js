import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMusicList } from '../../store/actions';
import PropTypes from 'prop-types';

class SearchBox extends Component {
    constructor() {
        super();

        this.state = {
            searchTerm: ''
        }
    }

    setSearchTerm = (e) => {
        this.setState({
            searchTerm: e.target.value
        });
    }

    fetchMusicBySearchTerm = (e) => {
        e.preventDefault();
        this.props.fetchMusicList(this.state.searchTerm);
    } 


    render() {
        return (
            <div className="search-wrapper">
                <form onSubmit={(e) => this.fetchMusicBySearchTerm(e)}>
                    <input className="search-input" type="text" value={this.state.searchTerm} onChange={this.setSearchTerm}/>
                    <button className="search-btn" onClick={this.fetchMusicBySearchTerm}>Search</button>
                </form>
            </div>
        );
    }
}

SearchBox.propTypes = {

};

function mapStateToProps(state){
    console.log('state', state.musicListReducer.musicList)
    return {
      musicList: state.musicListReducer.musicList
    }
  }
  
  function mapDispatchToProps(dispatch){
    return{
      fetchMusicList: bindActionCreators(fetchMusicList, dispatch),
    }
  }
  
  
  export default connect(null, mapDispatchToProps)(SearchBox);