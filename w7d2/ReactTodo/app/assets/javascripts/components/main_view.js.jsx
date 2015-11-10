var MainView = React.createClass({
  handleDestroy: function (e) {
    TodoStore.destroy(this.props.todo.id);
  },
  render: function() {
    return (
      <div className="main-view group">
        {typeof this.props.todo === "undefined" ? "" : (
          <div>
            <h2>{this.props.todo.title}</h2>
            <p>{this.props.todo.body}</p>
            <DoneButton id={this.props.todo.id} done={this.props.todo.done} store={TodoStore}/>
            <button className="delete-button" onClick={this.handleDestroy}>Delete</button>
            <StepList todo={this.props.todo} steps={this.props.steps} />
          </div>)
        }
      </div>
    );
  }
});
