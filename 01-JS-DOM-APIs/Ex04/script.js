function reqConfig (method, url, sync) {
  this.method = method;
  this.url = url;
  this.sync = sync;
}
function newQuery (text) {
  return new reqConfig ("GET", "https://api.github.com/search/repositories?q="+text, true);
  //return new reqConfig ("GET", "https://api.github.com/search/repositories?q=javascript", true);
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
  let sQuery = newQuery (document.getElementById("repoSearch").value);
  let list;
  let items;
  let columnNode;
  let textNode;
  reRequest(sQuery).then(function(response) {
    list = document.getElementById("repoList");
    items = JSON.parse(response).items;
    items.map(function (item) {
      columnNode = document.createElement("li");
      textNode = document.createTextNode(item.full_name);
      columnNode.appendChild(textNode);
      list.appendChild(columnNode);
    });
  });
}