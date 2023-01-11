//printing pattern

var n = 5;
var string = "";
// External loop
for (var i = 1; i <= n; i++) {
  // printing spaces
  for (var j = 1; j <= n - i; j++) {
    string += " ";
  }
  // printing star
  for (var k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
