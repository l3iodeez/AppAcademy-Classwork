var SidebarView = React.createClass({
  todosByTopic: function() {
    return this.props.todos.reduce(function(todosByTopic, todo) {
      todosByTopic[todo.topic] = todosByTopic[todo.topic] || [];
      todosByTopic[todo.topic].push(todo);
      return todosByTopic;
    }, {});
  },
  render: function() {
    var todosByTopic = this.todosByTopic(), topics = Object.keys(todosByTopic);
    return (
      <div className="sidebar">
        <TodoForm />
        {
          topics.map(function(topic) {
            return (
              <TopicView
                handleClick={this.props.handleClick}
                todos={todosByTopic[topic]} key={topic} />
            );
          }, this)
        }
      </div>
    );
  }
});
