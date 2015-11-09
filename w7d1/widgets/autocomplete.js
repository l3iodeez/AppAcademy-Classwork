var AutoComplete = React.createClass({
  getInitialState: function () {
    return {input:""};
  },
  input: function (event) {
    this.setState({input: event.currentTarget.value});
  },
  listClick: function (event) {
    this.setState({input: event.currentTarget.textContent});
  },
  render: function () {
    var names = this.props.names;
    input = this.state.input.toLowerCase();
    if (input.length > 0) {
      names = names.filter(function(name){
        return name.toLowerCase().match( input );
      });
    }
    var listEntries = names.map(function(name){
      return <li onClick={this.listClick}>{name}</li>;
    }.bind(this));
    return <div>
            <input type="text" value={this.state.input} onChange={this.input} placeholder="Enter name" />
            <ul>
              {listEntries}
            </ul>
          </div>;
  }
});

var names = ["Jake", "Lisa", "Frank"];
