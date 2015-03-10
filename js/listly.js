var Listly = function() {

  function Listly() {
    var self = this;
    self.tasks = [];

    function addTask(task_name) {
      self.tasks.push(task_name);
      if (save()) {
        appendToList(task_name);
        return true;
      }
      else {
        return false;
      }
    }

    function appendToList(task_name) {
      // Grab a copy of the list item template
      var li = $('#list_item_template').clone();
      li.removeAttr('id');

      // Add task name to the <li> template
      li.find('label').text(task_name);

      // Unhide
      li.removeClass('hidden');

      // Activate delete button
      li.find('.btn-danger').click(function() {

        li.remove();
      });

      $('#tasks').append(li);
    }

    function showFormError(form) {
      $(form).find('.alert')
        .html('Something went wrong!')
        .removeClass('hidden');
    }

    function supportsLocalStorage() {
      try {
        return 'localStorage' in window && window.localStorage !== null;
      }
      catch(err) {
        return false;
      }
    }

    function load() {
      if (supportsLocalStorage() && localStorage.tasks) {
        self.tasks = JSON.parse(localStorage.tasks);
        $.each(self.tasks, function(index, task_name) {
          appendToList(task_name);
        });
      }
    }

    function save() {
      if (supportsLocalStorage()) {
        return (localStorage.tasks = JSON.stringify(self.tasks));
      }
      else {
        return false;
      }
    }

    load();

    $('form#new_task').submit(function(ev) {
      ev.preventDefault();
      var field = $(this.task_name);
      var task_name = field.val();

      if (addTask(task_name)) {
        field.val('');
      }
      else {
        showFormError(this);
      }
      field.focus().select();
    });
  }

  return Listly;
}();

var listly = new Listly();
