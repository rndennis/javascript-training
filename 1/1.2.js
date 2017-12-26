function Greeting(name, message) {
  this.setName = function(newName) {
    name = newName;
  };

  this.setMessage = function(newMessage) {
    message = newMessage;
  };

  this.print = function() {
    console.log(`Hello ${name}, ${message}`);
  };
}

// TODO: Uncomment the following line
// console.log(name);

var greeting = new Greeting('Kent', 'how are you?');
greeting.print();

// TODO: Change the name and message to something of your choice

greeting.print();
