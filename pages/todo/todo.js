let _createTodoItem = (todos, value) => {
  todos.push({
    content: value,
    completed: false
  })
  return todos
}

let _calculateTodoCount = (todos) => {
  return todos.filter((todo) => !todo.completed).length;
}

let _toggleTododItem = (todos, index) => {
  todos[index].completed = !todos[index].completed;
  return todos
}

let _removeTodoItme = (todos, index) => {
  todos.splice(index,1);
  return todos
}

let _toggleAll = (todos) => {
  todos.map(todo => {
    if(!todo.completed) {
      todo.completed = !todo.completed;
      return todo;
    }
  });
  return todos;
}

Page({
  data:{
    inputValue: "",
    todoCount: 1,
    todos: [{
      content: "明天下午回公司",
      completed: false
    }, {
      content: "今天去选择照片",
      completed: true
    }]
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
  },
  changeInputValue: function(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  createTodoItem: function() {
    if(this.data.inputValue == "") {
      return
    }
    this.setData({
      todos: _createTodoItem(this.data.todos, this.data.inputValue),
      inputValue: "",
      todoCount: _calculateTodoCount(this.data.todos)
    })
  },
  toggleTododItem: function(e) {
    this.setData({
      todos: _toggleTododItem(this.data.todos, e.currentTarget.dataset.index),
      todoCount: _calculateTodoCount(this.data.todos)
    })
  },
  removeTodoItme: function(e) {
    this.setData({
      todos: _removeTodoItme(this.data.todos, e.currentTarget.dataset.index),
      todoCount: _calculateTodoCount(this.data.todos)
    })
  },
  toggleAll: function() {
    this.setData({
      todos: _toggleAll(this.data.todos),
      todoCount: _calculateTodoCount(this.data.todos)
    })
  },
  removeAll: function() {
    this.setData({
      todos: []
    })
  }
})