var Listly = function() {

  function Listly() {
    this.tasks = [];
    var self = this;

    $('form#new_task').submit(function(ev) {
      ev.preventDefault();
      var task_name = this.task_name.value;

      // Add a list item to #tasks
      var result = $('#tasks').append('<li class="list-group-item">' + task_name + '</li>');
      this.task_name.value = '';
      $(this.task_name).focus();

      // Add the task name to tasks array
      
    });
  }

  return Listly;
}();

var listly = new Listly();
