(function() {
  var TrackApi = window.TrackApi = window.TrackApi || {};

  TrackApi.fetch = function () {
    $.ajax({
      url: '/api/tracks',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        TrackStore.batchUpdate(data);
      }
    });
  };


  TrackApi.create = function (track) {
    var roll = JSON.stringify(track.roll);
    var name = track.name;
    $.ajax({
      url: '/api/tracks',
      type: 'POST',
      dataType: 'json',
      data: { track: {name: name, roll: roll} },
      success: function(data) {
        console.log("Track saved to DB");
      }
    });
  };
  TrackApi.delete = function (track_id) {
    $.ajax({
      url: '/api/tracks/' + track_id,
      type: 'DELETE',
      dataType: 'json',
      success: function(data) {
        console.log("Track deleted from DB");
      }
    });
  };

}());
