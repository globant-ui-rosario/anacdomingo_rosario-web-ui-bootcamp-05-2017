class eventEmitter {
	constructor(events) {
		this.events (eventName, callbacks) = {
			this.eventName: this.eventName,
			this.callbacks: [],
		};
	}
	on(eventName, callback) {
		if(this.events.eventName === eventName) {
			let i = this.events.callbacks.length;
			this.events.callbacks[i+1] = callback;
		}
	}
	emit(eventName) {
		if (this.events.eventName === eventName) {
			for (var i=0; i<=this.events.callbacks.length; i++) {
				this.events.callbacks[i];
			}
		}
	}
	off(eventName, callback) {
		if(this.events.eventName === eventName) {
			for (var i=0; i<=this.events.callbacks.length; i++) {
				if (this.events.callbacks[i] === callback) {
					this.events.callbacks[i] = null;
				}
			}
		}
	}
}

export {eventEmitter}