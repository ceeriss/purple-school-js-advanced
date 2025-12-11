class Car {
    constructor(brand, model, initialMileage = 0) {
        // Приватные свойства через замыкание
        let _brand = brand;
        let _model = model;
        let _mileage = initialMileage;

        // Валидация
        if (typeof initialMileage !== 'number' || initialMileage < 0) {
            throw new Error('Пробег должен быть неотрицательным числом');
        }

        // Геттер для пробега
        Object.defineProperty(this, 'mileage', {
            get: function() {
                return _mileage;
            },
            set: function(newMileage) {
                if (typeof newMileage !== 'number' || newMileage < 0) {
                    throw new Error('Пробег должен быть неотрицательным числом');
                }
                if (newMileage < _mileage) {
                    throw new Error('Новый пробег не может быть меньше текущего');
                }
                _mileage = newMileage;
            },
            enumerable: true,
            configurable: false
        });

        // Метод info
        this.info = function() {
            console.log(`Марка: ${_brand}`);
            console.log(`Модель: ${_model}`);
            console.log(`Пробег: ${_mileage} км`);
            console.log('---');
        };
    }
}