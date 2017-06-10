function reqConfig (method, url, sync) {
  this.method = method;
  this.url = url;
  this.sync = sync;
}
function newQuery () {
  return new reqConfig ("GET", "http://api.icndb.com/jokes/random", true);
}
function reRequest(object) {
  let req;
  return new Promise (function(resolve, reject) {
    req = new XMLHttpRequest();
    req.open(object.method, object.url, object.sync);
    req.send();
    req.onload = function () {
      if (this.status === 200 && this.readyState === 4) {
        resolve (this.response);
      } else {
        reject (this.statusText);
      }
    };
  })
}
function qSearch () {
  let sQuery = newQuery();
  reRequest(sQuery).then(function(response) {
    document.getElementById('jokeTextbox').innerHTML = JSON.parse(response).value.joke;
  }, function(text) {
    document.getElementById('jokeTextbox').style.backgroundColor = 'red';
    console.log(text);
  });
}