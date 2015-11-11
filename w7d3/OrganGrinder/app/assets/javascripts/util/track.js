(function() {

  // var Track = window.Track = window.Track || {};

  Track = function (opts) {
    this.id = opts.id || null;
    this.name = opts.name || "";
    this.roll = opts.roll || [];
  };

  Track.prototype.startRecording = function () {
    console.log("Started Recording");
    this.roll = [];
    this.startTime = Date.now();
  };

  Track.prototype.stopRecording = function () {
    console.log("Stopped Recording");
    this.addNotes([]);
  };

  Track.prototype.addNotes = function (notes) {
    var currentTime = Date.now();
    var timeSlice = currentTime - this.startTime;
    notes = notes || KeyStore.all();
    this.roll.push(
      {
        timeSlice: timeSlice,
        notes: notes
      }
    );
  };

  Track.prototype.play = function () {
    console.log("Playing Recording");

    if (this.intervalId) {
      return;
    }

    var playbackStartTime = Date.now();
    var currentNote = 0;

    this.intervalId = setInterval(function () {
      if (currentNote <= this.roll.length - 1) {
        var currentRoll = this.roll[currentNote];
        var elapsedTime = Date.now() - playbackStartTime;
        if (elapsedTime >= currentRoll.timeSlice) {
          var playedNotes = currentRoll.notes;
          var prevNotes = KeyStore.all();
          prevNotes.forEach(function (note) {
            KeyActions.keyReleased(note);
          });
          playedNotes.forEach(function (note) {
            KeyActions.keyPressed(note);
          });
          currentNote += 1;
        }

      }
      else {
        console.log("Playback finished.");
        clearInterval(this.intervalId);
        this.intervalId = null;
      }

    }.bind(this), 100);
  };

}());
