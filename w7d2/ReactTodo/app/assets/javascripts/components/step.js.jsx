var StepListItem = React.createClass({
  handleDestroy: function(e) {
    StepStore.destroy(this.props.step.id);
  },
  render: function() {
    return (
      <div className="step-list-item group">
        <p>{this.props.step.body}</p>
        <DoneButton
          id={this.props.step.id}
          store={StepStore}
          done={this.props.step.done} />
        <button className="step-delete" onClick={this.handleDestroy}>Delete</button>
      </div>
    );
  }
});


var StepList = React.createClass({
  render: function() {
    return (
      <div className="step-list">
        <StepForm todo_id={this.props.todo.id} />
        <h3>Steps</h3>
        <ul>
          {
            this.props.steps.map(function (step) {
              return <li key={step.id}><StepListItem step={step}/></li>;
            })
          }
        </ul>
      </div>
    );
  }
});

var StepForm = React.createClass({
  getInitialState: function () {
    return { body: "" };
  },

  handleSubmit: function (e) {
    e.preventDefault();
    StepStore.create({
      body: this.state.body,
      todo_id: this.props.todo_id
    });
    this.setState({body: ""});
  },

  handleChange: function(e) {
    this.setState({body: e.currentTarget.value});
  },

  render: function() {
    return (
      <form className="step-form group" onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.body} onChange={this.handleChange} />
        <input type="submit" value="Add Step" />
      </form>
    );
  }
});
