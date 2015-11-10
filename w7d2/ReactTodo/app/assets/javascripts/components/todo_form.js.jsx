var TodoForm = React.createClass({
  getInitialState: function() {
    return {title: "", body: "", topic: ""};
  },
  render: function() {
    return (
      <form className="todo-form" onSubmit={this.submitForm}>
        <label>Title
          <input type="text" value={this.state.title} onChange={this.updateAttribute.bind(this, "title")} />
        </label>

        <label>Body
          <textarea value={this.state.body} onChange={this.updateAttribute.bind(this, "body")} />
        </label>

        <label>Topic
          <input type="text" value={this.state.topic} onChange={this.updateAttribute.bind(this, "topic")} />
        </label>

        <input type="submit" value="New Todo" />
      </form>
    );
  },
  updateAttribute: function(attr, e) {
    this.state[attr] = e.currentTarget.value;
    this.forceUpdate();
  },
  submitForm: function(e) {
    e.preventDefault();
    TodoStore.create(Object.assign({}, this.state, { done: false } ));
    // TodoStore.create({title: this.state.title, body: this.state.body, done: false, topic: this.state.topic});
    this.setState({body: "", title: "", topic: ""});
  }
});
