import React, { Component } from 'react';
import Songs from './Songs'

//Works IF you go to a page and click link because Main
//has not run its componentDidMount method on render;

export default class SinglePlaylist extends Component {

  render () {
    const id = +this.props.match.params.playlistId
    console.log("PLAYLISTS", this.props.playlists, "ID", id)
    const playlist = this.props.playlists.find(e => e.id === id)
    console.log(playlist)
    return (
      <div>
        <h3>{ playlist.name }</h3>
        <Songs songs={playlist.songs} /> {/** Hooray for reusability! */}
        { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
        <hr />
      </div>
    )
  }


}
