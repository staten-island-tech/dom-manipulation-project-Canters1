DOMSelectors = {
    nameinput : document.querySelector("#name"),
    imageinput : document.querySelector("#image"),
    form: document.querySelector("#form"),
    flexwrapper: document.querySelector(".flex-wrapper"),

}

DOMSelectors.form.addEventListener('submit', function(event) { 
  event.preventDefault(); 

  console.log(DOMSelectors.nameinput.value);

  const card = document.createElement("div");
  card.classList.add("card");

  const Title = document.createElement("p");
  Title.textContent = DOMSelectors.nameinput.value;
  card.appendChild(Title);

  const image = document.createElement("img");
  image.src = DOMSelectors.imageinput.value;
  image.classList.add("image");
  card.appendChild(image);

  DOMSelectors.flexwrapper.appendChild(card);

}); 

