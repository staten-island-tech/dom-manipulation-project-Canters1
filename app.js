DOMSelectors = {
    nameinput : document.querySelector("#name"),
    imageinput : document.querySelector("#image"),
    actorinput : document.querySelector("#actors"),
    form: document.querySelector("#form"),
    flexwrapper: document.querySelector(".flex-wrapper"),
    Delete : document.querySelector("#Delete"),
    cards : document.querySelectorAll(".card")
}

DOMSelectors.form.addEventListener('submit', function(event) { 
  event.preventDefault(); 

  console.log(DOMSelectors.nameinput.value);

  const card = document.createElement("div");
  card.classList.add("card");

  const Title = document.createElement("h2");
  Title.textContent = DOMSelectors.nameinput.value;
  card.appendChild(Title);

  const image = document.createElement("img");
  image.src = DOMSelectors.imageinput.value;
  image.classList.add("image");
  card.appendChild(image);

  const Starring = document.createElement("h3");
  Starring.textContent = "Starring";
  card.appendChild(Starring);

  const Actors = document.createElement("p");
  Actors.textContent =  DOMSelectors.actorinput.value
  Actors.classList.add("card-sub");
  card.appendChild(Actors);

  

  DOMSelectors.flexwrapper.appendChild(card);

  DOMSelectors.nameinput.value =  ""
  DOMSelectors.imageinput.value =  ""
  DOMSelectors.actorinput.value =  ""

}); 
DOMSelectors.Delete.addEventListener('submit', function(event) { 
  event.preventDefault(); 
  const len = DOMSelectors.cards.len()
  document.body.removeChild(DOMSelectors.cards[len-1]);
  console.log(DOMSelectors.cards)
});
