class Logger {
	constructor() {}
	log (object, event) {
			if (object.played) {
				console.log(object.title + ' has emmited the event "' + event +'"');
			}
	}
}

export {Logger}