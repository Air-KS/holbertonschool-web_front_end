// File - 1-nested_functions.js
// Task 1 - Closure Scope Chain
let globalVariable = "Welcome";

function outer()
{
  alert(globalVariable);
  let course = "Holberton";

  function inner()
  {
    alert(globalVariable + " " + course);
    let exclamation = "!";

    function inception()
    {
      alert(globalVariable + " " + course + exclamation);
    }
    inception();
  }
  inner();
}
outer();
