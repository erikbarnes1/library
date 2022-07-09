let Library = [];

function Movie(name) {
  this.name = name;
}

function addMovieToLibrary() {
  //const newMovie = new Movie(newMovie.value);
  //Library.push(newMovie);
  displayMovies();
  div_hide();
  console.log(Library);
}

function displayMovies() {
  const newCard = document.createElement("div");
  newCard.className = "card";
  const libraryDiv = document.querySelector(".library");
  libraryDiv.appendChild(newCard);
  const title = document.querySelector("#title").value;
  newCard.textContent = title;
  Library.push(title);
}

//Library.forEach();

let addMovie = document.getElementById("submit");
addMovie.addEventListener("click", addMovieToLibrary);

//const newCard = document.createElement("div");

//card.innerHTML += `<div class="card">Item ${library.children.length + 1}</div>`;

//Function To Display Popup
function div_show() {
  document.getElementById("abc").style.display = "block";
}

//Function to Hide Popup
function div_hide() {
  document.getElementById("abc").style.display = "none";
}
