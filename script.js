// Находим элемент с классом 'test'
const timerElement = document.querySelector(".test");

function updateTimer() {
  // Текущая дата и дата следующего Нового Года
  const now = new Date();
  const nextYear = now.getFullYear() + 1;
  const newYear = new Date(nextYear, 0, 1);
  const diff = newYear - now;

  // Если Новый Год наступил
  if (diff <= 0) {
    timerElement.textContent = "🎉 С НОВЫМ ГОДОМ! 🎉";
    return;
  }

  // Рассчитываем время
  const totalSeconds = Math.floor(diff / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);

  const months = Math.floor(totalDays / 30);
  const days = totalDays % 30;
  const hours = totalHours % 24;
  const minutes = totalMinutes % 60;
  const seconds = totalSeconds % 60;

  // Формируем строку в нужном формате
  const timerString = `${months} месяцев, ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;

  // Вставляем в элемент с классом 'test'
  timerElement.innerHTML = timerString;
}

// Запускаем таймер
updateTimer();
setInterval(updateTimer, 1000);
