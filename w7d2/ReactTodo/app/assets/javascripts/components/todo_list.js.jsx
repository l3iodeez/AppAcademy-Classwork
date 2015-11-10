var TodoList = React.createClass({
  getInitialState: function() {
    return {activeIdx: 0, todos: TodoStore.all()};
  },
  changeActiveIdx: function (idx) {
    this.setState({activeIdx: idx});
    if (StepStore.all(idx).length === 0) {
      StepStore.fetch(idx);
    }
  },
  todosChanged: function() {
    this.setState({todos: TodoStore.all()});
  },
  stepsChanged: function() {
    this.forceUpdate();
  },
  componentDidMount: function() {
    TodoStore.addChangeHandler(this.todosChanged);
    TodoStore.fetch();

    StepStore.addChangeHandler(this.stepsChanged);
    StepStore.fetch(this.state.activeIdx);
  },
  componentWillUnmount: function() {
    TodoStore.removeChangeHandler(this.todosChanged);
    StepStore.removeChangeHandler(this.stepsChanged);
  },
  render: function() {
    var activeIdx = this.state.activeIdx;
    var activeTodo = this.state.todos.find(function (todo) {
      return todo.id === activeIdx;
    });
    return (
      <div className="todo-list group">
        <SidebarView handleClick={this.changeActiveIdx} todos={this.state.todos}/>
        <MainView todo={activeTodo} steps={StepStore.all(activeIdx)} />
      </div>
    );
  }
});
