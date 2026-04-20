const userName = document.getElementById('userName');
const userColor = document.getElementById('userColor');
const userComment = document.getElementById('userComment');
const userRadio = document.getElementById('userRadio');
const userCheck = document.getElementById('userCheck');
const form = document.getElementById('moodForm');

// Валидация имени - только буквы и пробелы
userName.addEventListener('input', () => {
    const filtered = userName.value.replace(/[^A-Za-zА-Яа-яЁё ]/g, '');
    if (filtered !== userName.value) {
        userName.value = filtered;
    }
});

// Обработка отправки формы
form.addEventListener('submit', (event) => {
    if (!form.checkValidity()) {
        event.preventDefault();
        form.reportValidity();
        return;
    }

    event.preventDefault();
    
    // Собираем данные формы
    const formData = {
        name: userName.value,
        color: userColor.value,
        comment: userComment.value,
        radio: userRadio.checked,
        checkbox: userCheck.checked
    };

    // Показываем результат
    alert(`Данные успешно отправлены!\n\nИмя: ${formData.name}\nЦвет настроения: ${formData.color}\nКомментарий: ${formData.comment}\nРадио: ${formData.radio ? 'Да' : 'Нет'}\nЧекбокс: ${formData.checkbox ? 'Да' : 'Нет'}`);
});

// Предотвращаем клик на пустое пространство для цветового пикера
const colorInputGroup = document.querySelector('.input-group:has(.color-input)');
const colorLabel = document.querySelector('label[for="userColor"]');

if (colorInputGroup) {
    colorInputGroup.addEventListener('click', (event) => {
        if (event.target === userColor) {
            return; // Разрешаем клик только на сам инпут
        }
        event.stopPropagation();
    });
}

// Предотвращаем открытие палитры при клике на лейбл
if (colorLabel) {
    colorLabel.addEventListener('click', (event) => {
        event.preventDefault();
    });
}

// Добавляем интерактивность для радио с возможностью отжать
userRadio.addEventListener('mousedown', (event) => {
    if (userRadio.checked) {
        event.preventDefault();
        userRadio.checked = false;
        // Триггерим change событие вручную
        userRadio.dispatchEvent(new Event('change'));
    }
});

userRadio.addEventListener('change', () => {
    console.log('Радио изменен:', userRadio.checked);
});

userCheck.addEventListener('change', () => {
    console.log('Чекбокс изменен:', userCheck.checked);
});
