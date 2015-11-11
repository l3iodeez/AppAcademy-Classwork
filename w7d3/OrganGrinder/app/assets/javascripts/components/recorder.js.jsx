var Recorder = React.createClass({

  getInitialState: function () {
    return { isRecording: false, track: new Track({name: "", roll: []})};
  },

  handleKeyChange: function () {
    this.state.track.addNotes(KeyStore.all());
  },

  play: function () {
    this.state.track.play();
  },

  startRecording: function () {
    KeyStore.addChangeHandler(this.handleKeyChange);
    this.state.track.startRecording();
  },

  stopRecording: function () {
    this.state.track.stopRecording();
    KeyStore.removeChangeHandler(this.handleKeyChange);
  },

  saveRecording: function () {
    var trackName = prompt("Enter a name:");
    this.state.track.name = trackName;
    TrackApi.create(this.state.track);
    TrackActions.saveTrack(this.state.track);

  },

  componentDidMount: function () {
  },

  render: function () {
    return (
      <div className="recorder" >
        <button onClick={this.play} >Play</button>
        <button onClick={this.startRecording} >Record</button>
        <button onClick={this.stopRecording} >Stop</button>
        <button onClick={this.saveRecording} >Save</button>
      </div>
    );
  }

});
