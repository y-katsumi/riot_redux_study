<todo>
  <error-message message={this.state.errorMessage} iserror={this.state.isError} hide={hideErrorMessage}></error-message>
  <loding-gif loding="{this.state.isLoading}"></loding-gif>
  <todo-form addtask={this.handlNewTask}></todo-form>
  <todo-list tasks={this.state.tasks} handlecheck={handleTaskCompletionChange}></todo-list>
  <script>
    var actions = require('../actions.js')
    var store = this.opts.store

    this.on('mount', function(){
      store.dispatch(actions.loadTasks())
    })

    store.subscribe(function(){
      this.state = store.getState()
      this.update()
    }.bind(this))

    handlNewTask(task){
      store.dispatch(actions.addTask(task))
    }

    handleTaskCompletionChange(id, isComplete){
      store.dispatch(actions.toggleComplete(id, isComplete))
    }
  </script>
</todo>
