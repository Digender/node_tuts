const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// console.log('start')
eventEmitter.on('tutorial', (num1, num2) => {
    console.log('tutorial event has occured ad addition ', (num1 + num2))
});

eventEmitter.emit('tutorial', 10, 20);

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    getName() {
        return this._name;
    }
}

let dj = new Person('Digender');
dj.on('Name', () => {
    console.log('My Name is ' + dj.getName()); //20:19 show him
});

dj.emit('Name');

let prema = new Person('Prema');
prema.on('Name', () => {
    console.log('My Name is ' + prema.getName()); //20:19 show him
});

prema.emit('Name');
