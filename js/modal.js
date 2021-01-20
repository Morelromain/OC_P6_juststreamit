// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the button that opens the modal
var btn_B1 = document.getElementById("btn_B1");
var btn_B2 = document.getElementById("btn_B2");
var btn_B3 = document.getElementById("btn_B3");
var btn_B4 = document.getElementById("btn_B4");
var btn_B5 = document.getElementById("btn_B5");
var btn_B6 = document.getElementById("btn_B6");
var btn_B7 = document.getElementById("btn_B7");

var btn_A1 = document.getElementById("btn_A1");
var btn_A2 = document.getElementById("btn_A2");
var btn_A3 = document.getElementById("btn_A3");
var btn_A4 = document.getElementById("btn_A4");
var btn_A5 = document.getElementById("btn_A5");
var btn_A6 = document.getElementById("btn_A6");
var btn_A7 = document.getElementById("btn_A7");

var btn_C1 = document.getElementById("btn_C1");
var btn_C2 = document.getElementById("btn_C2");
var btn_C3 = document.getElementById("btn_C3");
var btn_C4 = document.getElementById("btn_C4");
var btn_C5 = document.getElementById("btn_C5");
var btn_C6 = document.getElementById("btn_C6");
var btn_C7 = document.getElementById("btn_C7");

var btn_H1 = document.getElementById("btn_H1");
var btn_H2 = document.getElementById("btn_H2");
var btn_H3 = document.getElementById("btn_H3");
var btn_H4 = document.getElementById("btn_H4");
var btn_H5 = document.getElementById("btn_H5");
var btn_H6 = document.getElementById("btn_H6");
var btn_H7 = document.getElementById("btn_H7");


// When the user clicks the button, open the modal
play.onclick = function() {print_info(best_url1)};
btn_B1.onclick = function() {print_info(best_url1)};
btn_B2.onclick = function() {print_info(best_url2)};
btn_B3.onclick = function() {print_info(best_url3)};
btn_B4.onclick = function() {print_info(best_url4)};
btn_B5.onclick = function() {print_info(best_url5)};
btn_B6.onclick = function() {print_info(best_url6)};
btn_B7.onclick = function() {print_info(best_url7)};

btn_A1.onclick = function() {print_info(aventure_url1)};
btn_A2.onclick = function() {print_info(aventure_url2)};
btn_A3.onclick = function() {print_info(aventure_url3)};
btn_A4.onclick = function() {print_info(aventure_url4)};
btn_A5.onclick = function() {print_info(aventure_url5)};
btn_A6.onclick = function() {print_info(aventure_url6)};
btn_A7.onclick = function() {print_info(aventure_url7)};

btn_C1.onclick = function() {print_info(comedy_url1)};
btn_C2.onclick = function() {print_info(comedy_url2)};
btn_C3.onclick = function() {print_info(comedy_url3)};
btn_C4.onclick = function() {print_info(comedy_url4)};
btn_C5.onclick = function() {print_info(comedy_url5)};
btn_C6.onclick = function() {print_info(comedy_url6)};
btn_C7.onclick = function() {print_info(comedy_url7)};

btn_H1.onclick = function() {print_info(horror_url1)};
btn_H2.onclick = function() {print_info(horror_url2)};
btn_H3.onclick = function() {print_info(horror_url3)};
btn_H4.onclick = function() {print_info(horror_url4)};
btn_H5.onclick = function() {print_info(horror_url5)};
btn_H6.onclick = function() {print_info(horror_url6)};
btn_H7.onclick = function() {print_info(horror_url7)};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Infos modal
var id_image_url  = document.getElementById('id_image_url');
var id_title  = document.getElementById('id_title');
var id_genres  = document.getElementById('id_genres');
var id_date_published  = document.getElementById('id_date_published');
var id_rated  = document.getElementById('id_rated');
var id_imdb_score  = document.getElementById('id_imdb_score');
var id_directors  = document.getElementById('id_directors');
var id_actors  = document.getElementById('id_actors');
var id_duration  = document.getElementById('id_duration');
var id_countries  = document.getElementById('id_countries');
var id_worldwide_gross_income  = document.getElementById('id_worldwide_gross_income');
var id_description  = document.getElementById('id_description');


// Function print modal info
function print_info(url) {
modal.style.display = "block";
  fetch(url.innerHTML)
  .then((resp) => resp.json())
  .then(function(data) {
  id_image_url.src = data.image_url
  id_title.innerHTML = data.title
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
  id_worldwide_gross_income.innerHTML = "<b>Résultat au Box Office : </b>" + data.worldwide_gross_income
  if (id_worldwide_gross_income.innerHTML == "<b>Résultat au Box Office : </b>null") 
    {id_worldwide_gross_income.innerHTML = "<b>Résultat au Box Office : </b>inconnu"}
  id_description.innerHTML = "<b>Résumé du film : </b>" + data.long_description
  })
  .catch(function(error) { 
    console.log(error);
  });
  
}


