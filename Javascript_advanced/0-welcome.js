// File - 0-welcome.js
// Task Lexical scoping and welcome message

function welcome(firstName, lastName)
{
  var fullName = firstName + " " + lastName;

  function displayFullName()
  {
    alert("Welcom " + fullName + "!");
  }

  displayFullName();

}

welcome('Zana-S', 'Air-KS')

alert(fullName);
