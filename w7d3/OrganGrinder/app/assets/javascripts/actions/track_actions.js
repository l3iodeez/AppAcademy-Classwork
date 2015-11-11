window.TrackActions = {
  saveTrack: function (track) {
    AppDispatcher.dispatch({
      eventType: TrackConstants.ADD_TRACK,
      track: track
    });
  },

  deleteTrack: function (track) {
    AppDispatcher.dispatch({
      eventType: TrackConstants.REMOVE_TRACK,
      track: track
    });
  }

};
