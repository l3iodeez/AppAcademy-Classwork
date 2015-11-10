var TodoDetailView = React.createClass({
  getInitialState: function () {
    return { hidden: true };
  },
  toggleHidden: function () {
    this.setState({hidden: !this.state.hidden});
  },
  render: function() {
    var content;
    if (!this.state.hidden) {
      content =
      <div className="todo-list-details group">
        <div>{this.props.todo.body}</div>
        <button className="delete-button" onClick={this.props.handleDestroy}>Delete</button>
        <StepList todo={this.props.todo} />
      </div>;
    }
    return (
      <div className="todo-list-item group">
        <h2 onClick={this.toggleHidden}>{this.props.todo.title}</h2>
        <DoneButton id={this.props.todo.id}
            done={this.props.todo.done}
            store={TodoStore}/>
        {content}
      </div>
    );
  }
});
