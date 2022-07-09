let Library = [];

class Movie {
  constructor(title, year) {
    this.title = title;
    this.year = year;
  }
}

let newMovie;
const form = document.querySelector("#form");

function addMovieToLibrary() {
  newMovie = new Movie(title, year);
  Library.push(newMovie);

  div_hide();
  console.log(Library);
}

newMovie = new Movie(title, year);

const title = document.querySelector("#title").value;

const year = document.querySelector("#year").value;

function displayMovies() {
  const newCard = document.createElement("div");
  newCard.className = "card";
  const libraryDiv = document.querySelector(".library");
  libraryDiv.appendChild(newCard);
  const title = document.querySelector("#title").value;
  newCard.textContent = title;
  Library.push(title);
}

let addMovie = document.getElementById("submit");
addMovie.addEventListener("click", addMovieToLibrary);

//Function To Display Popup
function div_show() {
  document.getElementById("abc").style.display = "block";
}

//Function to Hide Popup
function div_hide() {
  document.getElementById("abc").style.display = "none";
}
