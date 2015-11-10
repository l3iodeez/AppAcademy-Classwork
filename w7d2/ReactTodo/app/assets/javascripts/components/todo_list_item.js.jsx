var TodoListItem = React.createClass({
  handleDestroy: function() {
    TodoStore.destroy(this.props.todo.id);
  },
  render: function() {
    return (
      <TodoDetailView todo={this.props.todo} handleDestroy={this.handleDestroy} />
    );
  }
});
