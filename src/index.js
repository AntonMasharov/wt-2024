// Браузер проверяет обязательные поля и email перед событием submit.
document.querySelectorAll('[data-demo-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.querySelector('.form-status').textContent =
            'Форма заполнена корректно. Это демонстрация: данные не отправлены.';
    });
});

const menu = document.querySelector('.mobile-menu');
const menuToggle = document.querySelector('.menu-toggle');

if (menu && menuToggle) {
    const closeMenu = () => menu.close();
    menuToggle.addEventListener('click', () => {
        menu.showModal();
        menuToggle.setAttribute('aria-expanded', 'true');
        menu.querySelector('.menu-close').focus();
    });
    menu.querySelector('.menu-close').addEventListener('click', closeMenu);
    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    menu.addEventListener('click', (event) => {
        if (event.target === menu) {
            const bounds = menu.getBoundingClientRect();
            if (event.clientY > bounds.bottom) closeMenu();
        }
    });
    menu.addEventListener('close', () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.focus();
    });
    window.matchMedia('(min-width: 1280px)').addEventListener('change', (event) => {
        if (event.matches && menu.open) closeMenu();
    });
}
