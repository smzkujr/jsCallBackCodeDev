function myFunction(callback) {
  Logger.log("Hello World!!");
  callback();
}

var yourFunction = function() {
  Logger.log("Bye World!!");
}

function executeFunction() {
  myFunction(yourFunction);
  myFunction(function() { Logger.log("Good World!!"); });
}
