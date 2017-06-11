class Movie {
	constructor(title, year, duration) {
		this.title = title;
		this.year = year;
		this.duration = duration;
	}
	play() {
	}
	pause() {
	}
	resume() {
	}
}
let vForVen = new Movie ("V for Vendetta", "2005", "132 min");
console.log(vForVen.title);
console.log(vForVen.year);
console.log(vForVen.duration);
let chihiro = new Movie ("Sen to Chihiro no kamikakushi", "2001", "125 min");
console.log(chihiro.title);
console.log(chihiro.year);
console.log(chihiro.duration);
let lisbethHype = new Movie ("Män som hatar kvinnor", "2009", "152 min");
console.log(lisbethHype.title);
console.log(lisbethHype.year);
console.log(lisbethHype.duration);

class Actor {
	constructor(name, age) {
	this.name = name;
	this.age = age;
	}
}
class eventEmitter {
	constructor() {
		this.events = [];
	}
	on (eventName, callback) {
		if(this.events[eventName] != callback) {
			callback();
		}
	}
	emit (eventName) {
		if (this.events[eventName]) {
			this.events[eventName];
		}
	}
	off (eventName, callback) {
		if(this.events[eventName]) {
			callback();
		}
	}
}