"use strict";

(function(root) {
  var StepStore = root.StepStore = {};
  var _steps = {};
  var _callbacks = [];

  StepStore.addChangeHandler = function (fn) {
    _callbacks.push(fn);
  };

  StepStore.removeChangeHandler = function (fn) {
    var idx = _callbacks.indexOf(fn);
    if (idx >= 0) {
      _callbacks.splice(idx, 1);
    }
  };

  StepStore.changed = function () {
    _callbacks.forEach(function (fn) {
      fn();
    });
  };

  StepStore.all = function (todo_id) {
    return _steps[todo_id] || [];
  };

  StepStore.fetch = function (todo_id) {
    $.ajax({
      url: '/api/todos/' + todo_id + '/steps',
      type: 'GET',
      dataType: 'json',
      cache: false,
      success: function (data) {
        _steps[todo_id] = data;
        StepStore.changed();
      }
    });
  };

  StepStore.create = function (step) {
    $.ajax({
      url: '/api/todos/' + step.todo_id + '/steps',
      type: 'POST',
      dataType: 'json',
      data: {step: step},
      success: function (data) {
        _steps[step.todo_id] = _steps[step.todo_id] || [];
        _steps[step.todo_id].unshift(data);
        StepStore.changed();
      }
    });
  };

  StepStore.destroy = function (id) {
    $.ajax({
      url: '/api/steps/' + id,
      type: 'DELETE',
      dataType: 'json',
      success: function (data) {
        _steps[data.todo_id] = _steps[data.todo_id].filter(function(step) {
          return step.id !== id;
        });
        StepStore.changed();
      }
    });
  };

  StepStore.update = function (step) {
    $.ajax({
      url: '/api/steps/' + step.id,
      type: 'PATCH',
      dataType: 'json',
      data: {step: step},
      success: function (data) {
        StepStore.changed();
      }
    });
  };

  StepStore.findStep = function (id) {
    for (var todo_id in _steps) {
      var todoSteps = _steps[todo_id];
      for (var i = 0; i < todoSteps.length; i++) {
        if (todoSteps[i].id === id) {
          return todoSteps[i];
        }
      }
    }
  };

  StepStore.toggleDone = function (id) {
    var step = StepStore.findStep(id);
    if (typeof step === "undefined") {
      return;
    }
    $.ajax({
      url: '/api/steps/' + id,
      type: 'PATCH',
      dataType: 'json',
      data: {step: {done: !step.done } },
      success: function (data) {
        step.done = data.done;
        StepStore.changed();
      }
    });
  };

})(this);
