// reset button
var elem = document.querySelector("#reset");
elem.addEventListener("click", (event) => {
  event.target.innerText = "Reseted";
});

elem.addEventListener("blur", function (event) {
  this.innerText = "Reset";
});

// input fields

var inputs = document.querySelectorAll("input");
for (var input of inputs) {
  input.addEventListener("focus", (event) => {
    event.target.style.background = "lightsalmon";
  });

  input.addEventListener("blur", (event) => {
    event.target.style.background = "white";
  });
}

// var labels = document.querySelectorAll("label");
// for (var label of labels) {
//   label.addEventListener("focus", (event) => {
//     event.target.style.color = "pink";
//   });

//   label.addEventListener("blur", (event) => {
//     event.target.style.color = "rgb(155, 77, 202)";
//   });
// }
