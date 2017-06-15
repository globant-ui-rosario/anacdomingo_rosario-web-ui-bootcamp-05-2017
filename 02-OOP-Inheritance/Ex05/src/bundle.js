(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _classEventEmitter = require('./classEventEmitter');

var _classMovie = require('./classMovie');

var _classActor = require('./classActor');

var _classLogger = require('./classLogger');

var actors = [new _classActor.Actor('Natalie Portman', 36), new _classActor.Actor('Hugo Weaving', 57), new _classActor.Actor('Stephen Fry', 59)];
var vForVen = new _classMovie.Movie('V for Vendetta', '2005', '132 min');
vForVen.addCast(actors[0]);
vForVen.addCast(actors[1], actors[2]);

var social = {
	share: function share(friendName, object) {
		console.log(friendName + ' shares ' + object.title);
	},
	like: function like(friendName, object) {
		console.log(friendName + ' likes ' + object.title);
	}
	//Here I use mixins
};Object.assign(vForVen, social);
vForVen.like('Marcos', vForVen);

},{"./classActor":2,"./classEventEmitter":3,"./classLogger":4,"./classMovie":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actor = function Actor(name, age) {
	_classCallCheck(this, Actor);

	this.name = name;
	this.age = age;
};

exports.Actor = Actor;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var eventEmitter = function () {
	function eventEmitter() {
		_classCallCheck(this, eventEmitter);

		this.events = ['play', 'resume', 'pause'];
	}

	_createClass(eventEmitter, [{
		key: 'on',
		value: function on(eventName, callback) {
			if (this.events[eventName] != callback) {
				callback();
			}
		}
	}, {
		key: 'emit',
		value: function emit(eventName) {
			if (this.events[eventName]) {
				this.events[eventName];
			}
		}
	}, {
		key: 'off',
		value: function off(eventName, callback) {
			if (this.events[eventName]) {
				callback();
			}
		}
	}]);

	return eventEmitter;
}();

exports.eventEmitter = eventEmitter;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
	function Logger() {
		_classCallCheck(this, Logger);
	}

	_createClass(Logger, [{
		key: 'log',
		value: function log(object, event) {
			if (object.played) {
				console.log(object.title + ' has emmited the event "' + event + '"');
			}
		}
	}]);

	return Logger;
}();

exports.Logger = Logger;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Movie = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _classEventEmitter = require('./classEventEmitter');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Movie = function (_eventEmitter) {
	_inherits(Movie, _eventEmitter);

	function Movie(title, year, duration) {
		_classCallCheck(this, Movie);

		var _this = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this));

		_this.title = title;
		_this.year = year;
		_this.duration = duration;
		_this.cast = [];
		return _this;
	}

	_createClass(Movie, [{
		key: 'play',
		value: function play() {
			_get(Movie.prototype.__proto__ || Object.getPrototypeOf(Movie.prototype), 'emit', this).call(this, 'play');
			this.played = true;
		}
	}, {
		key: 'pause',
		value: function pause() {
			_get(Movie.prototype.__proto__ || Object.getPrototypeOf(Movie.prototype), 'emit', this).call(this, 'pause');
		}
	}, {
		key: 'resume',
		value: function resume() {
			_get(Movie.prototype.__proto__ || Object.getPrototypeOf(Movie.prototype), 'emit', this).call(this, 'resume');
		}
	}, {
		key: 'addCast',
		value: function addCast() {
			for (var _len = arguments.length, actor = Array(_len), _key = 0; _key < _len; _key++) {
				actor[_key] = arguments[_key];
			}

			this.cast = this.cast.concat(actor);
		}
	}]);

	return Movie;
}(_classEventEmitter.eventEmitter);

exports.Movie = Movie;

},{"./classEventEmitter":3}]},{},[1]);
