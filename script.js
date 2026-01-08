// Функция, возвращающая Promise с геолокацией
function getCurrentLocationPromise() {
    return new Promise((resolve, reject) => {
        // Проверяем поддержку геолокации
        if (!navigator.geolocation) {
            reject(new Error('Геолокация не поддерживается вашим браузером'));
            return;
        }

        // Используем нативный API с колбэками
        navigator.geolocation.getCurrentPosition(
            // Успешный callback - резолвим промис
            (position) => {
                resolve(position);
            },
            // Ошибочный callback - реджектим промис
            (error) => {
                reject(new Error(getGeolocationError(error)));
            }
        );
    });
}

// Вспомогательная функция для обработки ошибок геолокации
function getGeolocationError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            return 'Пользователь отказал в доступе к геолокации';
        case error.POSITION_UNAVAILABLE:
            return 'Информация о местоположении недоступна';
        case error.TIMEOUT:
            return 'Время ожидания получения геолокации истекло';
        default:
            return 'Неизвестная ошибка геолокации';
    }
}
