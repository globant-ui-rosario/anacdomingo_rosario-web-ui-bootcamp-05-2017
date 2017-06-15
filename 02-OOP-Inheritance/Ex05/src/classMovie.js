import {eventEmitter} from './classEventEmitter';

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

export {Movie}