// Таймер до Нового Года для консоли

function getTimeUntilNewYear() {
  const now = new Date();
  const currentYear = now.getFullYear();
  const nextYear = currentYear + 1;
  const newYear = new Date(nextYear, 0, 1); // 1 января следующего года

  const diff = newYear - now;

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

  return { months, days, hours, minutes, seconds };
}

function formatTime(time) {
  const parts = [];

  if (time.months > 0) parts.push(`${time.months} месяцев`);
  if (time.days > 0) parts.push(`${time.days} дней`);
  if (time.hours > 0) parts.push(`${time.hours} часов`);
  if (time.minutes > 0) parts.push(`${time.minutes} минут`);
  if (time.seconds >= 0) parts.push(`${time.seconds} секунд`);

  return parts.join(", ");
}

// Запускаем таймер
console.log("Таймер до Нового Года запущен...\n");

setInterval(() => {
  const timeLeft = getTimeUntilNewYear();
  console.log(formatTime(timeLeft));
}, 1000);
