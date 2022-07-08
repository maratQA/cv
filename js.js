/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабоnчик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert('Семь раз отмерь, один раз отрежь')
})