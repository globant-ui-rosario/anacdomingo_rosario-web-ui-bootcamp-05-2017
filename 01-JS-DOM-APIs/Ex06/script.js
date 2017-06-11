document.addEventListener("load", createTable());

function createTable() {
	let matrix = [
		['Skill', 'Cost', 'Effect'],
		['Bufu', '3 MP', 'Small ice damage and 20% freeze to one foe.'],
		['Mabufu', '8 MP', 'Small ice damage and 10% freeze to all foes.'],
		['Ice breath', '9 MP', 'Small ice damage and 17% freeze to random foes.']
	];
	let sTable = document.createElement("table");
	for (var i=0; i<4; i++) {
		let rowNode = document.createElement("tr");
		for (var j=0; j<3; j++) {
			let cellNode = document.createElement("td");
			let textNode = document.createTextNode(matrix[i][j]);
			cellNode.appendChild(textNode);
			rowNode.appendChild(cellNode);
		}
		sTable.appendChild(rowNode);
	}
	document.getElementById("mWrap").appendChild(sTable);
}