class eventEmitter {
	constructor() {
		this.events = [];
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
	}
	play() {
		super.emit('play');
	}
	pause() {
		super.emit('pause');
	}
	resume() {
		super.emit('resume');
	}
}