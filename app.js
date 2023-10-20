DOMSelectors = {
    nameinput : document.querySelector("#name"),
    imageinput : document.querySelector("#image"),
    actorinput : document.querySelector("#actors"),
    form: document.querySelector("#form"),
    flexwrapper: document.querySelector(".flex-wrapper"),
    Delete : document.querySelector("#Delete"),
}

const cardHTML = `
  <div class="card">
    <h2>${DOMSelectors.nameinput.value}</h2>
    <img src="${DOMSelectors.imageinput.value}" class="image">
    <h3>Starring</h3>
    <p class="card-sub">${DOMSelectors.actorinput.value}</p>
    <button class="delbutton" onclick="this.parentNode.remove()">Delete</button>
  </div>
`;

DOMSelectors.form.addEventListener('submit', function(event) { 
  event.preventDefault();
  flexwrapper.insertadjacentHTML(
    "beforeend",
    cardHTML
  )

  DOMSelectors.nameinput.value =  ""
  DOMSelectors.imageinput.value =  ""
  DOMSelectors.actorinput.value =  ""

}); 
DOMSelectors.Delete.addEventListener('submit', function(event) { 
  event.preventDefault(); 
  const flexbox = DOMSelectors.flexwrapper;
  const lastcard = flexbox.lastElementChild;
  flexbox.removeChild(lastcard);
});
