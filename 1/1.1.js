function helloWorld() {
  var message = 'Hello World';
  return function() {
    console.log(message);
  };
}

helloWorld()();
