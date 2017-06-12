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

export {eventEmitter}