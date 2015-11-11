(function (root) {
  var KeyStore = root.KeyStore = $.extend({}, EventEmitter.prototype);
  var _notes = [];
  var CHANGE_EVENT = 'key_change';

  KeyStore.addChangeHandler = function (callback) {
    this.on(CHANGE_EVENT, callback);
  };

  KeyStore.removeChangeHandler = function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
  };

  KeyStore.changed = function () {
    this.emit(CHANGE_EVENT);
  };

  KeyStore.dispatcherId = AppDispatcher.register(function (payload) {

    switch (payload.eventType) {
      case KeyConstants.ADD_NOTE:

        KeyStore.add(payload.noteName);
        break;
      case KeyConstants.REMOVE_NOTE:
        KeyStore.remove(payload.noteName);
        break;
    }
  });

  KeyStore.add = function (note) {
    var idx = _notes.indexOf(note);
    if (idx === -1) {
      _notes.push(note);
      KeyStore.changed();
    }
  };

  KeyStore.remove = function (note) {
    var idx = _notes.indexOf(note);
    if (idx >= 0) {
      _notes.splice(idx, 1);
    }

    KeyStore.changed();
  };

  KeyStore.all = function () {
    return _notes.slice();
  };


}(this));
