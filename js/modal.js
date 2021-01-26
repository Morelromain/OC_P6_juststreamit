// variable declaration
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var btn_best = [
  document.getElementById("btn_B1"), document.getElementById("btn_B2"),
  document.getElementById("btn_B3"), document.getElementById("btn_B4"),
  document.getElementById("btn_B5"), document.getElementById("btn_B6"),
  document.getElementById("btn_B7")
];
var btn_advent = [
  document.getElementById("btn_A1"), document.getElementById("btn_A2"),
  document.getElementById("btn_A3"), document.getElementById("btn_A4"),
  document.getElementById("btn_A5"), document.getElementById("btn_A6"),
  document.getElementById("btn_A7")
];
var btn_comedy = [
  document.getElementById("btn_C1"), document.getElementById("btn_C2"),
  document.getElementById("btn_C3"), document.getElementById("btn_C4"),
  document.getElementById("btn_C5"), document.getElementById("btn_C6"),
  document.getElementById("btn_C7")
];
var btn_horror = [
  document.getElementById("btn_H1"), document.getElementById("btn_H2"),
  document.getElementById("btn_H3"), document.getElementById("btn_H4"),
  document.getElementById("btn_H5"), document.getElementById("btn_H6"),
  document.getElementById("btn_H7")
];

// variable declaration infos modal
var id_image_url  = document.getElementById("id_image_url");
var id_title  = document.getElementById("id_title");
var id_genres  = document.getElementById("id_genres");
var id_date_published  = document.getElementById("id_date_published");
var id_rated  = document.getElementById("id_rated");
var id_imdb_score  = document.getElementById("id_imdb_score");
var id_directors  = document.getElementById("id_directors");
var id_actors  = document.getElementById("id_actors");
var id_duration  = document.getElementById("id_duration");
var id_countries  = document.getElementById("id_countries");
var id_worldwide_gross_income  = document.getElementById("id_worldwide_gross_income");
var id_description  = document.getElementById("id_description");

// function print_info when clicks
play.onclick = function() {print_info(best_1)};
for (let nb in btn_best) {
  btn_best[nb].onclick = function() {print_info(list_best[nb])};
}
for (let nb in btn_advent) {
  btn_advent[nb].onclick = function() {print_info(list_adventure[nb])};
}
for (let nb in btn_comedy) {
  btn_comedy[nb].onclick = function() {print_info(list_comedy[nb])};
}
for (let nb in btn_horror) {
  btn_horror[nb].onclick = function() {print_info(list_horror[nb])};
}

// function close modal when cliks
span.onclick = function() {
  modal.style.display = "none";
}

// function close modal when cliks outside
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Function print modal info
function print_info(url) {
  modal.style.display = "block";
  fetch(url.innerHTML)
  .then((resp) => resp.json())
  .then(function(data) {
    id_image_url.src = data.image_url
    id_title.innerHTML = data.original_title
    id_genres.innerHTML = "<b>Genre(s) : </b>" + data.genres
    id_date_published.innerHTML = "<b>Date de sortie : </b>" + data.date_published
    id_rated.innerHTML = "<b>Restriction : </b>" + data.rated
    if (id_rated.innerHTML == "<b>Restriction : </b>Not rated or unkown rating") 
      {id_rated.innerHTML = "<b>Tous public</b>"}
    id_imdb_score.innerHTML = "<b>Score IMDB : </b>" + data.imdb_score
    id_directors.innerHTML = "<b>Réalisateur(s) : </b>" + data.directors
    id_actors.innerHTML = "<br><b>Acteur(s) : </b>" + data.actors
    id_duration.innerHTML = "<b>Durée : </b>" + data.duration + " min"
    id_countries.innerHTML = "<b>Pays d'origine : </b>" + data.countries
    id_worldwide_gross_income.innerHTML = "<b>Résultat au Box Office : </b>" + data.worldwide_gross_income + " $"
    if (id_worldwide_gross_income.innerHTML == "<b>Résultat au Box Office : </b>null $") 
      {id_worldwide_gross_income.innerHTML = "<b>Résultat au Box Office : </b>inconnu"}
    id_description.innerHTML = "<b>Résumé du film : </b>" + data.long_description
  })
  .catch(function(error) { 
    console.log(error);
  });
}
