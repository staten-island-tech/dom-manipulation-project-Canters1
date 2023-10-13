DOMSelectors = {
    nameinput : document.querySelector("#name"),
    form: document.querySelector("#form"),
    h1s : document.querySelectorAll("h1"),

}

DOMSelectors.form.addEventListener('submit', function(event) { 
  event.preventDefault(); 

  console.log(DOMSelectors.nameinput.value);

  DOMSelectors.h1s.forEach( (h1) => (h1.textContent = DOMSelectors.nameinput.value)
  );

}); 

// Create a button
/* const button = document.getElementById("myButton");

// Add an event listener to the button
button.addEventListener("click", () => {
  // Create a card
  const card = document.createElement("div");
  card.classList.add("card");

  // Add some text to the card
  const text = document.createElement("p");
  text.textContent = "This is a card";
  card.appendChild(text);

  // Append the card to the DOM
  document.body.appendChild(card);
}); */



DOMSelectors.h1s.forEach((h1) => console.log(h1.textContent))