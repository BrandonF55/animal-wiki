onload = function() {
  const form = document.querySelector('form');
  console.log("on load ran");
  form.onsubmit = function(submission) {
    const animal = document.querySelector("#animal").value;
    console.log("form sent");
    if (animal === "pig") {
      document.querySelector("#pig").removeAttribute("class");
    } else if (animal === "cow") {
      document.querySelector("#cow").removeAttribute("class");
    } else {
      document.querySelector("#other").removeAttribute("class");
    }
    submission.preventDefault();
  }
}