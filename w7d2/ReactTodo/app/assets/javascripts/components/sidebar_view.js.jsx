var SidebarView = React.createClass({
  render: function() {
    var rows = [];
    var lastTopic = null;
    this.props.todos.forEach(function (todo) {
      if (todo.topic !== lastTopic) {
        rows.push(<li key={todo.topic} className="topic-heading">{todo.topic}</li>);
        lastTopic = todo.topic;
      }
      rows.push(
        <li onClick={this.props.handleClick.bind(null, todo.id)} key={todo.id}>
          {todo.title}
        </li>
        );
    }, this);

    return (
      <div className="sidebar">
        <TodoForm />
        { rows }
      </div>
    );
  }
});
