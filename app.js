DOMSelectors = {
    nameinput : document.querySelector("#name"),
    submit: document.querySelector("#submit"),
    h1s : document.querySelectorAll("h1"),

}

DOMSelectors.submit.addEventListener(
    "click",
    function () {
      console.log(document.querySelector("#name").innerText); 
    }
  );


DOMSelectors.h1s.forEach((h1) => console.log(h1.textContent))