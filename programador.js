// Clase programador
// Objeto con la configuracion de horas y temperaturas ideales
// Elementos de un array con dos claves: 'hora' y 'temperatura'

const EventEmitter = require("./events")
const later = require("later");


class Programador extends EventEmitter {
	constructor(config){
		super();
		later.date.localTime();
		config.forEach(({temperatura, hora}) =>	{
			const schedule = later.parse.text("at" + hora);
			later.setInterval(() => {this.emit("ideal",temperatura)}, schedule);
		})
	}
}

module.exports = Programador;
