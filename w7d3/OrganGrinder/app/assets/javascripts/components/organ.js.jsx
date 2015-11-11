var Organ = React.createClass ({

  render: function () {
    var keys = Object.keys(TONES).map(function (noteName) {
      return (
        <Key noteName={noteName} />
      );
    });

    return (
      <div className="container">
        <div className="organ group" >
          {keys}
          <Recorder />
        </div>

        <br />
        <div className="jukebox group">
          <h3>Saved Tracks</h3>
          <Jukebox />
        </div>
      </div>

    );
  }

});
