var TopicView = React.createClass({
  render: function() {
    return (
      <div>
        <h4>{this.props.todos[0].topic}</h4>
        <ul className="topic-list">
          {
            this.props.todos.map(function(todo) {
              return (
                <li onClick={this.props.handleClick.bind(null, todo.id)} key={todo.id}>
                  {todo.title}
                </li>
              );
            }, this)
          }
        </ul>
      </div>
    );
  }
});
