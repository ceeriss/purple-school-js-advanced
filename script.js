// 1. Базовый класс Персонажа
const Persona = function(rasa, name, language) {
    this.rasa = rasa;
    this.name = name;
    this.language = language;
}

// Метод говорить - ВЫВОДИТ в консоль, а не возвращает
Persona.prototype.talk = function() {
    console.log(`Мое имя: ${this.name} и язык: ${this.language}`);
}

// 2. Класс Орка (наследуется от Persona)
const Ork = function(name, language, weapon) {
    // Вызываем конструктор родителя
    Persona.call(this, 'Орк', name, language);
    this.weapon = weapon;
}

// Настраиваем прототипное наследование
Ork.prototype = Object.create(Persona.prototype);
Ork.prototype.constructor = Ork;

// Добавляем метод удара в прототип Орка
Ork.prototype.attack = function() {
    console.log(`${this.name} бьет ${this.weapon}ой! Удар!!!`);
}

// 3. Класс Эльфа (наследуется от Persona)
const Elf = function(name, language, magic) {
    // Вызываем конструктор родителя
    Persona.call(this, 'Эльф', name, language);
    this.magic = magic;
}

// Настраиваем прототипное наследование
Elf.prototype = Object.create(Persona.prototype);
Elf.prototype.constructor = Elf;

// Добавляем метод создания заклинания в прототип Эльфа
Elf.prototype.createSpell = function() {
    console.log(`${this.name} создала заклинание: "${this.magic}"`);
}

// 4. ТЕПЕРЬ создаем экземпляры классов
const ork = new Ork('Данила', 'Оркский', 'Секира');
const elf = new Elf('Валерия', 'Эльфийский', 'Заклинание любви');

console.log('=== Орк ===');
ork.talk();      // Метод унаследован от Persona
ork.attack();    // Собственный метод Орка
console.log(ork); // Показывает все свойства

console.log('\n=== Эльф ===');
elf.talk();          // Метод унаследован от Persona
elf.createSpell();   // Собственный метод Эльфа
console.log(elf);    // Показывает все свойства