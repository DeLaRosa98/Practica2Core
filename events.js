// EventEmmiter

class EventEmitter {

	constructor(){
		this.listeners = {};
	}

	emit(eventName, ...args){
		if(this.listeners[eventName]){
			this.listeners[eventName].forEach(cb => cb(...args));
		}	
	}

	on(eventName, cb){
		this.listeners[eventName] = this.listeners[eventName] || [];
		this.listeners[eventName].push(cb);
	}
	
}

module.exports = EventEmitter;
