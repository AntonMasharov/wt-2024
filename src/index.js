// Браузер проверяет обязательные поля и email перед событием submit.
document.querySelectorAll('[data-demo-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.querySelector('.form-status').textContent =
            'Форма заполнена корректно. Это демонстрация: данные не отправлены.';
    });
});
