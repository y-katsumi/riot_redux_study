<todo-list>
  <ul>
    <li each={task in this.opts.tasks}>
      <label>
        <input type="checkbox" id="{task.id}" checked="{task.isComplete}"
          onchange={handleCheck}>
        {task.name}
      </label>
    </li>
  </ul>
  <script>
    handleCheck(evt){
      this.opts.handlecheck(evt.target.id, evt.target.checked)
    }
  </script>

</todo-list>
