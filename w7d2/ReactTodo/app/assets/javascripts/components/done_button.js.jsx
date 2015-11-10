var DoneButton = React.createClass({
  handleDone: function (e) {
    this.props.store.toggleDone(this.props.id);
  },
  render: function() {
    return (
      <button className="done-button" onClick={this.handleDone}>
        {this.props.done ? "Undo" : "Done"}
      </button>
    );
  }
});
