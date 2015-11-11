window.KeyActions = {
  keyPressed: function (noteName) {
    AppDispatcher.dispatch({
      eventType: KeyConstants.ADD_NOTE,
      noteName: noteName
    });
  },
  keyReleased: function (noteName) {
    AppDispatcher.dispatch({
      eventType: KeyConstants.REMOVE_NOTE,
      noteName: noteName
    });
  }


};
