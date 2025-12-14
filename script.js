class Persona {
  constructor(rasa, name, language) {
    this.rasa = rasa;
    this.name = name;
    this.language = language;
  }
  talk() {
    console.log(`Мое имя: ${this.name} и язык: ${this.language}`);
  }
}

class Ork extends Persona {
  constructor(name, rasa, language, weapon) {
    super(rasa, name, language);  // порядок как в родителе
    this.weapon = weapon;
  }
  attack() {
    console.log(`${this.name} бьет ${this.weapon}ой! Удар!!!`);
  }
}

class Elf extends Persona {  // добавлено extends
  constructor(name, rasa, language, magic) {
    super(rasa, name, language);  // порядок как в родителе
    this.magic = magic;
  }
  createSpell() {
    console.log(`${this.name} создала заклинание: "${this.magic}"`);
  }
}

const ork = new Ork('Данила', 'Орк', 'Оркский', 'Секира');  // правильный порядок
const elf = new Elf('Валерия', 'Эльф', 'Эльфийский', 'Заклинание любви');

console.log('=== Орк ===');
ork.talk();
ork.attack();
console.log(ork);

console.log('\n=== Эльф ===');
elf.talk();
elf.createSpell();
console.log(elf);

