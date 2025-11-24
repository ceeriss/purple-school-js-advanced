const users = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
];

// Используем Set для получения уникальных id
const uniqueIds = [...new Set(users.map(user => user.id))];

// Используем find для нахождения первого объекта с каждым id
const uniqueUsers = uniqueIds.map(id => users.find(user => user.id === id));

console.log(uniqueUsers);
// [{ id: 1, name: "Вася" }, { id: 2, name: "Петя" }]