const input = document.querySelector("input");

input.addEventListener("change", function (event) {
  const file = input.files;
  console.log(file);
});
