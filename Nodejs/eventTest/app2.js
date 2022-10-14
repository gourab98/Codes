var events = require('events')

var util = require('util')

var Person = function(name){
    this.name = name
}

util.inherits(Person,events.EventEmitter)

var james = new Person('james')
var pritom = new Person('pritom')
var apu = new Person('apu')

var people = [james, pritom, apu]

people.forEach(function(person){
    person.on('speak', function(mssg){
        console.log(person.name + ' said: '+ mssg)
    })
})

james.emit('speak','Hey, I am James.')
apu.emit('speak','Hello, I am hungry.')
pritom.emit('speak','Okay, then. Go to a restaurant.')