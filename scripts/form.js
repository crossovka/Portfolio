'use strict';

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	// при отправки формы должно переходить в функцию form send
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();
		// отменяет стандартное поведение кнопки и теперь действия будут происходить в js нижу

		// валидация форм

		// созданной переменной передаю работу функции formValidate
		let error = formValidate(form);

		if (error === 0) {
		} else {
			alert('заполните обязательные поля');
		}
	}

	function formValidate(form) {
		let error = 0;
		// присваиваю переменной все объекты с классом req (обязательный)
		let formReq = document.querySelector('._req');

		// цикл пробегает по всем этим объектам и полуает каждый объект в константу input для дальнейшей работы с ней
		for (let index = 0; index < formReq.lenght; index++) {
			const input = formReq[index];
			// каждый раз когда приступаю к проверке нужно убрать класс error
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					// если тест не пройден, то объекту класс error и его родителю. затем увеличивать на единицу энкриментом
					formAddError(input);
					error++;
				} else {
					if (input.value === '') {
						// проверка на то пустая ли строка
						formAddError(input);
						error++;
					}
				}
			}
		}
	}
	// вспомогательные функции
	// добавляют объекту и родительскому объеекту класс error
	function formAddError(input) {
		input.parrentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parrentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	// тест функция email
	function emailTest(input) {
		// регулярным выражением проверяет есть ли такие символы, их количество
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
});
