var Jukebox = React.createClass ({
  getInitialState: function () {
    return {
      tracks: TrackStore.all()
    };
  },
  handleTrackChange: function () {
    this.setState({tracks:  TrackStore.all() });
  },
  componentDidMount: function () {
    TrackStore.addChangeHandler(this.handleTrackChange);
    TrackApi.fetch();
  },
  render: function () {
    return (
      <div>
      {this.state.tracks.map(function (track) {
        return <TrackPlayer track={track} />;
      })}
      </div>
    );
  }
});
