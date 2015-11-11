(function(root) {

  var TrackStore = root.TrackStore = $.extend({}, EventEmitter.prototype);
  var _tracks = [];
  var CHANGE_EVENT = "track_change";

  TrackStore.addChangeHandler = function (callback) {
    this.on(CHANGE_EVENT, callback);
  };

  TrackStore.removeChangeHandler = function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
  };

  TrackStore.changed = function () {
    this.emit(CHANGE_EVENT);
  };

  TrackStore.dispatcherId = AppDispatcher.register(function (payload) {

    switch (payload.eventType) {
      case TrackConstants.ADD_TRACK:

        TrackStore.add(payload.track);
        break;
      case TrackConstants.REMOVE_TRACK:
        TrackStore.remove(payload.track);
        break;
    }
  });

  TrackStore.add = function (track) {
    var idx = _tracks.indexOf(track);
    if (idx === -1) {
      _tracks.push(track);
      TrackStore.changed();
    }
  };
  TrackStore.batchUpdate = function (tracks) {
    _tracks = [];
    tracks.forEach(function (track) {
      _tracks.push(new Track(track));
    });
    TrackStore.changed();
  };
  TrackStore.remove = function (track) {
    var idx = _tracks.indexOf(track);
    if (idx >= 0) {
      _tracks.splice(idx, 1);
    }

    TrackStore.changed();
  };

  TrackStore.all = function () {
    return _tracks.slice();
  };


}(this));
