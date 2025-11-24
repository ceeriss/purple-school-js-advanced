const users = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
];

// Используем Map для хранения объектов по уникальному ключу (id)
const uniqueUsers = Array.from(
  new Map(users.map(user => [user.id, user])).values()
);

console.log(uniqueUsers);
// [{ id: 1, name: "Вася" }, { id: 2, name: "Петя" }]