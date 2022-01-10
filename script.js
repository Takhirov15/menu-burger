const toggleButton = document.querySelector('#toggle');
const navbar = document.querySelector('.navbar');

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
})



// 1) - подключаемся с (querySelector) к id - (toggle), и класс - (navbar)
// 2) - потом (addEventListener) - запускает функцию при клике,
//  если клик сделан добавляется класс (active)