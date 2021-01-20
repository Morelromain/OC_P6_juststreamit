
var url_top = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";
var url_best = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";
var url_best2 = "http://localhost:8000/api/v1/titles/?page=2&sort_by=-imdb_score";
var url_aventure = "http://localhost:8000/api/v1/titles/?genre=Adventure&sort_by=-imdb_score";
var url_aventure2 = "http://localhost:8000/api/v1/titles/?genre=Adventure&page=2&sort_by=-imdb_score";
var url_comedy = "http://localhost:8000/api/v1/titles/?genre=Comedy&sort_by=-imdb_score";
var url_comedy2 = "http://localhost:8000/api/v1/titles/?genre=Comedy&page=2&sort_by=-imdb_score";
var url_horror = "http://localhost:8000/api/v1/titles/?genre=Horror&sort_by=-imdb_score";
var url_horror2 = "http://localhost:8000/api/v1/titles/?genre=Horror&page=2&sort_by=-imdb_score";
var best_url = "http://localhost:8000/api/v1/titles/1508669";


var best_img1 = document.getElementById('best_img1');
var best_img2 = document.getElementById('best_img2');
var best_img3 = document.getElementById('best_img3');
var best_img4 = document.getElementById('best_img4');
var best_img5 = document.getElementById('best_img5');
var best_img6 = document.getElementById('best_img6');
var best_img7 = document.getElementById('best_img7');
var best_url1 = document.getElementById('best_url1');
var best_url2 = document.getElementById('best_url2');
var best_url3 = document.getElementById('best_url3');
var best_url4 = document.getElementById('best_url4');
var best_url5 = document.getElementById('best_url5');
var best_url6 = document.getElementById('best_url6');
var best_url7 = document.getElementById('best_url7');


var aventure_img1 = document.getElementById('aventure_img1');
var aventure_img2 = document.getElementById('aventure_img2');
var aventure_img3 = document.getElementById('aventure_img3');
var aventure_img4 = document.getElementById('aventure_img4');
var aventure_img5 = document.getElementById('aventure_img5');
var aventure_img6 = document.getElementById('aventure_img6');
var aventure_img7 = document.getElementById('aventure_img7');
var aventure_url1 = document.getElementById('aventure_url1');
var aventure_url2 = document.getElementById('aventure_url2');
var aventure_url3 = document.getElementById('aventure_url3');
var aventure_url4 = document.getElementById('aventure_url4');
var aventure_url5 = document.getElementById('aventure_url5');
var aventure_url6 = document.getElementById('aventure_url6');
var aventure_url7 = document.getElementById('aventure_url7');

var comedy_img1 = document.getElementById('comedy_img1');
var comedy_img2 = document.getElementById('comedy_img2');
var comedy_img3 = document.getElementById('comedy_img3');
var comedy_img4 = document.getElementById('comedy_img4');
var comedy_img5 = document.getElementById('comedy_img5');
var comedy_img6 = document.getElementById('comedy_img6');
var comedy_img7 = document.getElementById('comedy_img7');
var comedy_url1 = document.getElementById('comedy_url1');
var comedy_url2 = document.getElementById('comedy_url2');
var comedy_url3 = document.getElementById('comedy_url3');
var comedy_url4 = document.getElementById('comedy_url4');
var comedy_url5 = document.getElementById('comedy_url5');
var comedy_url6 = document.getElementById('comedy_url6');
var comedy_url7 = document.getElementById('comedy_url7');

var horror_img1 = document.getElementById('horror_img1');
var horror_img2 = document.getElementById('horror_img2');
var horror_img3 = document.getElementById('horror_img3');
var horror_img4 = document.getElementById('horror_img4');
var horror_img5 = document.getElementById('horror_img5');
var horror_img6 = document.getElementById('horror_img6');
var horror_img7 = document.getElementById('horror_img7');
var horror_url1 = document.getElementById('horror_url1');
var horror_url2 = document.getElementById('horror_url2');
var horror_url3 = document.getElementById('horror_url3');
var horror_url4 = document.getElementById('horror_url4');
var horror_url5 = document.getElementById('horror_url5');
var horror_url6 = document.getElementById('horror_url6');
var horror_url7 = document.getElementById('horror_url7');

function fetch_cat(url, img1, url1, img2, url2, img3, url3, img4, url4, img5, url5) {
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    img1.src = data.results[0].image_url
    img2.src = data.results[1].image_url
    img3.src = data.results[2].image_url
    img4.src = data.results[3].image_url
    img5.src = data.results[4].image_url
    url1.innerHTML = data.results[0].url
    url2.innerHTML = data.results[1].url
    url3.innerHTML = data.results[2].url
    url4.innerHTML = data.results[3].url
    url5.innerHTML = data.results[4].url
  })
  .catch(function(error) {
    console.log(error);
  });
}

function fetch_cat2(url, img1, url1, img2, url2) {
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    img1.src = data.results[0].image_url
    img2.src = data.results[1].image_url
    url1.innerHTML = data.results[0].url
    url2.innerHTML = data.results[1].url
  })
  .catch(function(error) {
    console.log(error);
  });
}

function fetch_top (url) {
  fetch(url) 
  .then((resp) => resp.json())
  .then(function(data) {
    best_img.src = data.image_url
    best_title.innerHTML = data.title
    best_desc.innerHTML = data.description
    })
  .catch(function(error) { 
    console.log(error);
  });
}


fetch_cat(url_best, best_img1, best_url1, best_img2, best_url2, best_img3, best_url3, 
  best_img4, best_url4, best_img5, best_url5)
fetch_cat2(url_best2, best_img6, best_url6, best_img7, best_url7)
fetch_cat(url_aventure, aventure_img1, aventure_url1, aventure_img2, aventure_url2, 
  aventure_img3, aventure_url3, aventure_img4, aventure_url4, aventure_img5, aventure_url5)
fetch_cat2(url_aventure2, aventure_img6, aventure_url6, aventure_img7, aventure_url7)
fetch_cat(url_comedy, comedy_img1, comedy_url1, comedy_img2, comedy_url2, comedy_img3, 
  comedy_url3, comedy_img4, comedy_url4, comedy_img5, comedy_url5)
fetch_cat2(url_comedy2, comedy_img6, comedy_url6, comedy_img7, comedy_url7)
fetch_cat(url_horror, horror_img1, horror_url1, horror_img2, horror_url2, horror_img3, 
  horror_url3, horror_img4, horror_url4, horror_img5, horror_url5)
fetch_cat2(url_horror2, horror_img6, horror_url6, horror_img7, horror_url7)
fetch_top(best_url)

