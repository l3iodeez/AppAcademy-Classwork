var Key = React.createClass({
  getInitialState: function () {
    return {pressed: false};
  },
  keyChanged: function () {

    var idx = KeyStore.all().indexOf(this.props.noteName);
    if (idx >= 0) {
      this.state.note.start();
      this.setState({pressed: true});
    }
    else {
      this.state.note.stop();
      this.setState({pressed: false});
    }
  },

  componentDidMount: function () {
    var freq = TONES[this.props.noteName];
    this.setState({ note: new Note(freq) });
    KeyStore.addChangeHandler(this.keyChanged);
  },

  render: function () {
    var classes = this.state.pressed ? "organ-key pressed" : "organ-key";
    return(
      <div className={classes}><p>{this.props.noteName}</p>
      </div>
    );
  }

});
