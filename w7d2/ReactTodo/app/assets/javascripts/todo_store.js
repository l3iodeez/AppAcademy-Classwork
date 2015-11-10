"use strict";

(function(root) {
  var TodoStore = root.TodoStore = {};
  var _todos = [];
  var _callbacks = [];

  TodoStore.addChangeHandler = function (fn) {
    _callbacks.push(fn);
  };

  TodoStore.removeChangeHandler = function (fn) {
    var idx = _callbacks.indexOf(fn);
    if (idx >= 0) {
      _callbacks.splice(idx, 1);
    }
  };

  TodoStore.changed = function () {
    _callbacks.forEach(function (fn) {
      fn();
    });
  };

  TodoStore.all = function () {
    return _todos;
  };

  TodoStore.fetch = function () {
    $.ajax({
      url: '/api/todos',
      type: 'GET',
      dataType: 'json',
      cache: false,
      success: function (data) {
        _todos = data;
        TodoStore.changed();
      }
    });
  };

  TodoStore.create = function (todo) {
    $.ajax({
      url: '/api/todos',
      type: 'POST',
      dataType: 'json',
      data: {todo: todo},
      success: function (data) {
        _todos.unshift(data);
        TodoStore.changed();
      }
    });
  };

  TodoStore.destroy = function (id) {
    $.ajax({
      url: '/api/todos/' + id,
      type: 'DELETE',
      dataType: 'json',
      success: function (data) {
        _todos = _todos.filter(function(todo) {
          return todo.id !== id;
        });
        TodoStore.changed();
      }
    });
  };

  TodoStore.toggleDone = function (id) {
    var todo = _todos.find(function (todo) {
      return todo.id === id;
    });
    if (typeof todo === "undefined") {
      return;
    }
    $.ajax({
      url: '/api/todos/' + id,
      type: 'PATCH',
      dataType: 'json',
      data: {todo: {done: !todo.done } },
      success: function (data) {
        todo.done = data.done;
        TodoStore.changed();
      }
    });
  };
})(this);
