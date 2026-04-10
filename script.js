document.addEventListener("DOMContentLoaded", function () {
  const img = document.getElementById("myImage");
  if (img) {
    img.addEventListener("click", function () {
      alert("Ai dat click pe imagine!");
    });
  }
});