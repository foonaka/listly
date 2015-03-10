var Task = function() {
  var self = this;
  self.counter = 1;

  function getOrSetID(id) {
    if (!id) {
      id = self.counter + 1;
    }
    incrementCounter(id);
    return id;
  }

  function incrementCounter(id) {
    if (id > self.counter) {
      self.counter = id;
    }
  }

  function Task(properties) {
    this.name = properties.name;
    this.id = getOrSetID(properties.id);
  }

  return Task;
}();
