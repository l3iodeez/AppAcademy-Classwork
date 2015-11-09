var WeatherClock = React.createClass({
  getInitialState: function(){
    return {currentTime: new Date(Date.now()),
            temp: "loading...",
            weather: "",
            description: "",
            city: ""
          };

  },
  updateTime: function () {
    var time = this.state.currentTime;
    time.setSeconds(time.getSeconds() + 1);
    this.setState({currentTime: time});
  },
  savePos: function (pos) {
    this.lat = pos.coords.latitude;
    this.lon = pos.coords.longitude;
    var request = new XMLHttpRequest();
    var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + this.lat + '&lon=' + this.lon + '&APPId=c4e74ee932c7f7ba76b0ff234767815c';
    request.open('GET',url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var resp = JSON.parse(request.responseText);
        this.setState({city: resp.name,
                       temp: resp.main.temp - 273,
                       weather: resp.weather[0].main,
                       description: resp.weather[0].description});
      } else {
        // We reached our target server, but it returned an error
      }
    }.bind(this);
    request.onerror = function() {
      // There was a connection error of some sort
    };
    request.send();
  },
  componentDidMount:function () {
    this.intervalHandle = setInterval(this.updateTime, 1000);
    navigator.geolocation.getCurrentPosition(this.savePos);
  },
  componentWillUnmount: function () {

  },
  render: function () {
    return <div>
             <section><h2>{this.state.currentTime.toTimeString()} </h2></section>
             <section><p>{this.state.city || "loading..." } </p></section>
             <section><p>{Math.round(this.state.temp) ? Math.round(this.state.temp) + "ºC": "" } </p></section>
             <section><p>{this.state.description || "" } </p></section>
           </div>;
  }
});
