document.addEventListener('load', function() {
		window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
		if (!window.indexedDB) {
	 	window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
		}
		let request = window.indexedDB.open('TextDB', 3);
		let db;
		request.onsuccess = function(event) {
	 	db = event.target.result;
		};
		let objectStore = db.createObjectStore('text');
		document.getElementById('store').addEventListener('click', function() {
			let transaction = db.transaction('text', 'readWrite');
			transaction.oncomplete = function(event) {
				objectStore.add(document.getElementById('textBox').value);
			};
		});
		document.getElementById('clear').addEventListener('click', function() {
			let transaction = db.transaction('text');
			transaction.oncomplete = function(event) {
				objectStore.clear();
			}
		});
});

document.getElementById('store').addEventListener('click', function() {localStorage.text = document.getElementById('textBox').value});
document.getElementById('clear').addEventListener('click', function() {localStorage.removeItem('text')});
console.log(localStorage.text);