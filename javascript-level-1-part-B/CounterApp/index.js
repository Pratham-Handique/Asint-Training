// Closure-based counter function
function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      updateDisplay();
    },
    decrement: function () {
      count--;
      updateDisplay();
    },
    reset: function () {
      count = 0;
      updateDisplay();
    },
    getValue: function () {
      return count;
    }
  };

  function updateDisplay() {
    document.getElementById("count").textContent = count;
  }
}


const counter = createCounter();


//document.querySelector(".increment").addEventListener("click", counter.increment);
document.getElementById("x").addEventListener("click", counter.increment);
document.querySelector(".decrement").addEventListener("click", counter.decrement);
document.querySelector(".reset").addEventListener("click", counter.reset);
