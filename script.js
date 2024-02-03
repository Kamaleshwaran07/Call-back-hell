let displaY = document.getElementById("display");
function countdown(number, callback) {
  setTimeout(() => {
    displaY.innerText = number;

    if (number > 0) {
      countdown(number - 1, callback);
    } else {
      callback();
    }
  }, 1000);
}

countdown(10, () => {
  setTimeout(() => {
    displaY.innerText = "Happy Independence Day";
  }, 0);
});
