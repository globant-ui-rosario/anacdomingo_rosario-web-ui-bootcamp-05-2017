function reqConfig (method, url, sync) {
  this.method = method;
  this.url = url;
  this.sync = sync;
}
function newQuery (text) {
  return new reqConfig("GET", "https://api.github.com/search/repositories?q="+text, true);
}
function reRequest(object) {
  return new Promise (function(resolve, reject) {
    let req = new XMLHttpRequest();
    req.open(object.method, object.url, object.sync);
    req.send();
    req.onreadystatechange = function () {
      if (this.status === 200 && this.readyState === 4) {
        resolve (this.response);
      } else {
        reject (this.statusText);
      }
    };
  })
}
function qSearch (sText) {
  let sQuery = newQuery(sText);
  let list;
  let items;
  let columnNode;
  let textNode;
  reRequest(sQuery).then(function(response) {
    list = document.getElementById('repoList');
    items = JSON.parse(response).items;
    items.map(function (item) {
      columnNode = document.createElement('li');
      textNode = document.createTextNode(item.full_name);
      columnNode.appendChild(textNode);
      list.appendChild(columnNode);
    });
  });
}