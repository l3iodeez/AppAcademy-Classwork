(function() {
  'use strict';
  var KEYMAPS = {
    81: "C5",
    87: "D5",
    69: "E5",
    82: "F5",
    84: "G5",
    89: "A5",
    85: "B5",
    73: "C6",
    79: "D6",
    80: "E6"
  };
  $(document).on('keydown', function (event) {
    var noteName = KEYMAPS[event.which];
    KeyActions.keyPressed(noteName);
  });
  $(document).on('keyup', function (event) {
    var noteName = KEYMAPS[event.which];
    KeyActions.keyReleased(noteName);
  });
}());
