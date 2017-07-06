import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class AllArtists extends Component {

// artists.filter(function(artist){
//   console.log(artist.match(`/.*${this.state.artistSearch}.*/g`))
//   return artist.match(`/.*${this.state.artistSearch}.*/g`)
// }.

  constructor () {
    super();
    this.state = {
      artists: [],
      artistSearch: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount () {
    axios.get('/api/artists')
      .then(res => res.data)
      .then(artists => this.setState({ artists }));
  }

  handleChange(event) {
    this.setState({
      artistSearch: event.target.value
    })
  }

  render () {

    const artists = this.state.artists;

    return (
      <div>
        <form className="form-group" style={{marginTop: '20px'}}>
          <input
            className="form-control"
            placeholder="Enter artist name"
            onChange={e => this.handleChange(e)}   
          />
        </form>
        <h3>Artists</h3>
        <div className="list-group">
          {artists.map(artist => {
              console.log(this.state.artistSearch);
              if (artist.name.match(new RegExp(`.*${this.state.artistSearch}.*`, 'i'))) {
                return (
                  <div className="list-group-item" key={artist.id}>
                    <Link to={`/artists/${artist.id}`}>{ artist.name }</Link>
                  </div>
                );
              } else {
                return;
              }
            })
          }
        </div>
      </div>
    );
  }
}
 