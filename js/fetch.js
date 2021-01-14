function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

var ul = document.getElementById('aaaa');
const url1 = document.getElementById("testa").innerHTML;

fetch(url1)
.then((resp) => resp.json())
.then(function(data) {
  let aaaa = data.results;
  return aaaa.map(function(aaa,i) {
    let li = createNode('li'),
        img = createNode('img'),
        span = createNode('span');
    img.src = data.results[i].image_url;
    span.innerHTML = data.results[i].title;
    append(li, img);
    append(li, span);
    append(ul, li);
  })
})

var url = 'http://localhost:8000/api/v1/titles/?imdb_score=9.6';
const img = document.getElementById('img');
const img2 = document.getElementById('img2');

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  img.src = data.results[2].image_url
  img2.src = data.results[3].image_url
  })

.catch(function(error) {
  console.log(error);
});   



