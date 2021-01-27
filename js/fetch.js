// variable declaration
var url_best = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";
var url_adventure = "http://localhost:8000/api/v1/titles/?genre=Adventure&sort_by=-imdb_score";
var url_comedy = "http://localhost:8000/api/v1/titles/?genre=Comedy&sort_by=-imdb_score";
var url_horror = "http://localhost:8000/api/v1/titles/?genre=Horror&sort_by=-imdb_score";
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

// function fetch per category
function fetch_cat(url, list) {
  fetch(url).then(resp => {
    if(resp.ok){resp.json().then(data => {
      for (let nb = 0; nb < 5; nb++) {
        list[nb].src = data.results[nb].image_url;
        list[nb].innerHTML = data.results[nb].url}
      fetch(data.next).then(resp => {
        if(resp.ok){resp.json().then(data => {
          for (let nb = 0; nb < 2; nb++) {
            list[nb+5].src = data.results[nb].image_url;
            list[nb+5].innerHTML = data.results[nb].url}
        })
        } else {console.log("bad response url")};
      })
      .catch(function(error) {console.log(error)});
    })
  } else {console.log("bad response url")};
  })
  .catch(function(error) {console.log(error)});
}

// function fetch for banner
function fetch_top(url) {
  fetch(url).then(resp => {
    if(resp.ok){
      resp.json().then(data => {
        fetch(data.results[0].url)
        .then((resp) => resp.json())
        .then(data => {
          best_img.src = data.image_url;
          best_title.innerHTML = data.title;
          best_desc.innerHTML = data.description
        })
        .catch(error => {console.log(error)});
      })
    } else {
      console.log("bad response url");
    }
  })
  .catch(error => {console.log(error)});
}

// fetch
fetch_top(url_best);
fetch_cat(url_best, list_best);
fetch_cat(url_adventure, list_adventure);
fetch_cat(url_comedy, list_comedy);
fetch_cat(url_horror, list_horror);
