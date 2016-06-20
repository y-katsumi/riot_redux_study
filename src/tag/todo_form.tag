<todo_form>
  <form onsubmit={changeTitle}>
    <input type="text" name="newTitle">
    <input type="submit" value="change title">
  </form>

  <script>
    var action = require('../action.js')
    changeTitle(){
      this.opts.store.dispatch(action.changeTitle(this.newTitle.value))
    }
  </script>
</todo_form>
