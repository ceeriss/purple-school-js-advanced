const Persona = function (rasa, name, language,) {
	this.rasa = rasa;
	this.name = name;
	this.language = language;
}

Persona.prototype.talk = function () {
	return `Мое имя: ${this.name} и язык: ${this.language}`
}
const Ork = new Persona('Орк', 'Данила', 'Оркский')

Ork.weapon = 'Секира'

Ork.attack = function () {
	return console.log('Удар!!!');
	
}
console.log(Ork);
Ork.attack()


const Elf = new Persona('Эльф', 'Валерия', 'Эльфийский')

Elf.magic = 'Заклинание любви'

Elf.createSpell = function () {
	return console.log('Я создала заклинание');
	
	
}
console.log(Elf);
Elf.createSpell()
