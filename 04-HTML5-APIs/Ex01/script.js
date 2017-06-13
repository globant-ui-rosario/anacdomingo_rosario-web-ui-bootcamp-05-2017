document.getElementById('store').addEventListener('click', function() {localStorage.text = document.getElementById('textBox').value});
document.getElementById('clear').addEventListener('click', function() {localStorage.removeItem('text')});
console.log(localStorage.text);