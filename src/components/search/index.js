import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBox extends Component {
    constructor() {
        super();

        this.state = {
            searchTerm: ''
        }
    }

    setSearchTerm = (e) => {
        let value = e.target.value;
        this.setState({
            searchTerm: value
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
    fetchMusicList: PropTypes.func
};

  
export default SearchBox;