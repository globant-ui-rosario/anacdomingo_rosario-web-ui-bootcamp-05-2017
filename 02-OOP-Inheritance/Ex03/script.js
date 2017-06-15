class eventEmitter {
	constructor() {
		this.events = ['play', 'resume', 'pause'];
	}
	on(eventName, callback) {
		if(this.events[eventName] != callback) {
			callback();
		}
	}
	emit(eventName) {
		if (this.events[eventName]) {
			this.events[eventName];
		}
	}
	off(eventName, callback) {
		if(this.events[eventName]) {
			callback();
		}
	}
}
class Movie extends eventEmitter {
	constructor(title, year, duration) {
		super();
		this.title = title;
		this.year = year;
		this.duration = duration;
		this.cast = [];
	}
	play() {
		super.emit('play');
		this.played = true;
	}
	pause() {
		super.emit('pause');
	}
	resume() {
		super.emit('resume');
	}
	addCast(...actor) {
		this.cast = this.cast.concat(actor);
	}
}
class Actor {
	constructor(name, age) {
	this.name = name;
	this.age = age;
	}
}
//Here I created class Logger
class Logger {
	constructor() {}
	log (object, event) {
			if (object.played) {
				console.log(object.title + ' has emmited the event "' + event +'"');
			}
	}
}
//Here is the array for the cast, and then I test the addCast method
const actors = [
	new Actor ('Natalie Portman', 36),
	new Actor ('Hugo Weaving', 57),
	new Actor ('Stephen Fry', 59)
];
let vForVen = new Movie ('V for Vendetta', '2005', '132 min');
	vForVen.addCast(actors[0]);
	vForVen.addCast(actors[1], actors[2]);
	console.log(vForVen.cast);
//Now I test the Logger class
let playLog = new Logger;
	vForVen.play();
	playLog.log(vForVen, 'play');