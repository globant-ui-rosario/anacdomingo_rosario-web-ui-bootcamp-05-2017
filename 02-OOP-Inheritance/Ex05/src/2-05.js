import {eventEmitter} from './classEventEmitter';
import {Movie} from './classMovie';
import {Actor} from './classActor';
import {Logger} from './classLogger';

const actors = [
	new Actor ('Natalie Portman', 36),
	new Actor ('Hugo Weaving', 57),
	new Actor ('Stephen Fry', 59)
];
let vForVen = new Movie ('V for Vendetta', '2005', '132 min');
	vForVen.addCast(actors[0]);
	vForVen.addCast(actors[1], actors[2]);

let social = {
	share: function (friendName, object) {
		console.log(`${friendName} shares ${object.title}`);
	},
	like: function (friendName, object) {
		console.log(`${friendName} likes ${object.title}`);
	}
}
//Here I use mixins
Object.assign (vForVen, social);
	vForVen.like('Marcos', vForVen);