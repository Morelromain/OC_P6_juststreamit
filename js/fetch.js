// variable declaration

var url_best = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";
var url_best2 = "http://localhost:8000/api/v1/titles/?page=2&sort_by=-imdb_score";
var url_adventure = "http://localhost:8000/api/v1/titles/?genre=Adventure&sort_by=-imdb_score";
var url_adventure2 = "http://localhost:8000/api/v1/titles/?genre=Adventure&page=2&sort_by=-imdb_score";
var url_comedy = "http://localhost:8000/api/v1/titles/?genre=Comedy&sort_by=-imdb_score";
var url_comedy2 = "http://localhost:8000/api/v1/titles/?genre=Comedy&page=2&sort_by=-imdb_score";
var url_horror = "http://localhost:8000/api/v1/titles/?genre=Horror&sort_by=-imdb_score";
var url_horror2 = "http://localhost:8000/api/v1/titles/?genre=Horror&page=2&sort_by=-imdb_score";

var list_best = [
  document.getElementById("best_1"), document.getElementById("best_2"),
  document.getElementById("best_3"), document.getElementById("best_4"),
  document.getElementById("best_5"), document.getElementById("best_6"),
  document.getElementById("best_7")
];
var list_adventure = [
  document.getElementById("advent_1"), document.getElementById("advent_2"),
  document.getElementById("advent_3"), document.getElementById("advent_4"),
  document.getElementById("advent_5"), document.getElementById("advent_6"),
  document.getElementById("advent_7")
];
var list_comedy = [
  document.getElementById("comedy_1"), document.getElementById("comedy_2"),
  document.getElementById("comedy_3"), document.getElementById("comedy_4"),
  document.getElementById("comedy_5"), document.getElementById("comedy_6"),
  document.getElementById("comedy_7")
];
var list_horror = [
  document.getElementById("horror_1"), document.getElementById("horror_2"),
  document.getElementById("horror_3"), document.getElementById("horror_4"),
  document.getElementById("horror_5"), document.getElementById("horror_6"),
  document.getElementById("horror_7")
];
var best_img = document.getElementById("best_img");
var best_title = document.getElementById("best_title");
var best_desc = document.getElementById("best_desc");

// function fetch
function fetch_cat(url, url2, list) {
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    for (let nb = 0; nb < 5; nb++) {
      list[nb].src = data.results[nb].image_url
      list[nb].innerHTML = data.results[nb].url;
    }
  })
  .catch(function(error) {
    console.log(error);
  });
  fetch(url2)
  .then((resp) => resp.json())
  .then(function(data) {
    for (let nb = 0; nb < 2; nb++) {
      list[nb+5].src = data.results[nb].image_url
      list[nb+5].innerHTML = data.results[nb].url;
    }
  })
  .catch(function(error) {
    console.log(error);
  });
}

// function fetch for banner
function fetch_top(url) {
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    fetch(data.results[0].url)
    .then((resp) => resp.json())
    .then(function(data) {
      best_img.src = data.image_url;
      best_title.innerHTML = data.title;
      best_desc.innerHTML = data.description;
      })
    .catch(function(error) {
      console.log(error);
      });
    })
}

// fetch per category
fetch_top(url_best);
fetch_cat(url_best, url_best2, list_best);
fetch_cat(url_adventure, url_adventure2, list_adventure);
fetch_cat(url_comedy, url_comedy2, list_comedy);
fetch_cat(url_horror, url_horror2, list_horror);
