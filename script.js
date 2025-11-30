function rollDice(diceType) {
  // Извлекаем число из строки (убираем 'd')
  const sides = parseInt(diceType.substring(1));

  // Генерируем случайное число от 1 до количества граней включительно
  return Math.floor(Math.random() * sides) + 1;
}

// Примеры использования:
console.log(rollDice("d4")); // Случайное число от 1 до 4
console.log(rollDice("d6")); // Случайное число от 1 до 6
console.log(rollDice("d8")); // Случайное число от 1 до 8
console.log(rollDice("d10")); // Случайное число от 1 до 10
console.log(rollDice("d12")); // Случайное число от 1 до 12
console.log(rollDice("d16")); // Случайное число от 1 до 16
console.log(rollDice("d20")); // Случайное число от 1 до 20
