var TrackPlayer = React.createClass({
  handlePlayTrack: function () {
    this.props.track.play();
  },

  handleDeleteTrack: function () {
    TrackActions.deleteTrack(this.props.track);
    TrackApi.delete(this.props.track.id);
  },

  render: function () {
    return(
      <div className="jukebox-track group">
        <p>{this.props.track.name}</p>
        <button onClick={this.handlePlayTrack} >Play</button>
        <button onClick={this.handleDeleteTrack} >Delete</button>
      </div>
    );
  }
});
