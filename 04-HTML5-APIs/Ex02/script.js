function dragOver(e) {
	e.preventDefault();
	e.stopPropagation();
	e.dataTransfer.dropEffect = 'copy';
}
function dropFiles(e) {
	e.preventDefault();
	e.stopPropagation();
	let files = e.dataTransfer.files;
	var file = files[0];
	if (file.type == 'text/plain') {
		function readFile(f) {
			let reader = new FileReader();
			reader.readAsText(f);
			reader.onload = function() {
				let newText = reader.result;
				document.getElementById('dropzone').textContent = newText;
			}
		}
	readFile(file);
	} else if (file.type.match('image/*')) {
		alert('Entre al if');
		function readImage(f) {
			let reader = new FileReader();
			reader.readAsDataURL(f);
			reader.onload = function() {
				let newImage = document.createElement('img');
				newImage.src = reader.result;
				document.getElementById('dropzone').appendChild(newImage);
			}
		}
		readImage(file);
	}
}