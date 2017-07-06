import React, { Component } from 'react';

//Need to fix button so it updates with state

class NewPlaylist extends Component {

  constructor(){
    super()
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();
    this.setState({
      inputValue: ''
    });
  }

  handleChange (event) {
    this.setState({
      inputValue: event.target.value
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
                <button type="submit" className="btn btn-success" disabled={() => {
                  return (this.state.inputValue !== "" && this.state.inputValue.length <= 16)
                }
              }>Create Playlist</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default NewPlaylist;
