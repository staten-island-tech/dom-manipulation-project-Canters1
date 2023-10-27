DOMSelectors = {
    nameinput : document.querySelector("#name"),
    imageinput : document.querySelector("#image"),
    actorinput : document.querySelector("#actors"),
    form: document.querySelector("#form"),
    flexwrapper: document.querySelector(".flex-wrapper"),
    delete: document.querySelectorAll(".card-delete")
}


function makemovie() {
    return `
    <div class="card">
      <h2>${DOMSelectors.nameinput.value}</h2>
      <img src="${DOMSelectors.imageinput.value}" class="image">
      <h3>Starring:</h3>
      <p class="card-sub">${DOMSelectors.actorinput.value}</p>
      <button class= "delbutton">Delete</button>
    </div>`
  };

function clearfields() {
    DOMSelectors.nameinput.value =  "";
    DOMSelectors.imageinput.value =  "";
    DOMSelectors.actorinput.value =  "";
  }; 


DOMSelectors.form.addEventListener('submit', function(event) { 
  event.preventDefault();
  
  const movie = makemovie();
  DOMSelectors.flexwrapper.insertAdjacentHTML(
    "beforeend",
    movie
  );
  
  clearfields();
  
  const deleteButtons = document.querySelectorAll('.delbutton');
  deleteButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.currentTarget.parentNode.remove();
    });
  });


});







/* DOMSelectors.Delete.addEventListener('submit', function(event) { 
  event.preventDefault(); 
  const flexbox = DOMSelectors.flexwrapper;
  const lastcard = flexbox.lastElementChild;
  flexbox.removeChild(lastcard); */
