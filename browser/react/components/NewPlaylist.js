import React, { Component } from 'react';
import axios from 'axios';

class NewPlaylist extends Component {

  constructor(){
    super()
    this.state = {
      inputValue: '',
      buttonDisabled: true,
      dirtyInput: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();
    this.props.addPlaylist(this.state.inputValue);
    this.setState({
      inputValue: ''
    });
  }

  handleChange (event) {
    var invalidForButton = !event.target.value.length || event.target.value.length > 16;
    this.setState({
      inputValue: event.target.value,
      buttonDisabled: invalidForButton,
      dirtyInput: true
    });
  }

  render() {
    return (
      <div className="well">
        <form className="form-horizontal" onSubmit={event => this.handleSubmit(event)}>
          <fieldset>
            <legend>New Playlist</legend>
            <div className="form-group">
              <label className="col-xs-2 control-label">Name</label>
              <div className="col-xs-10">
                <input className="form-control" name='playlistName' type="text" onChange={event => this.handleChange(event)} value={this.state.inputValue}/>
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                {
                  this.state.dirtyInput && this.state.buttonDisabled ? (<div className="alert alert-warning" name="validWarning">Please enter a valid name</div>) : <div></div>
                }
                <button type="submit" className="btn btn-success" disabled={this.state.buttonDisabled}>Create Playlist</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default NewPlaylist;
