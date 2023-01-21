// 'use strict';

// $(document).ready(function () {
// 	const form = $('#form');
// 	console.log(form);
// 	// при отправки формы должно переходить в функцию form send
// 	form.on('submit', formSend);
// });

// async function formSend(e) {
// 	e.preventDefault();

// 	formValidate($('#form'));

// 	console.log('everything ok, continuing');

// 	// с помощью formData вытягиваю все данные полей
// 	let formData = new FormData(form);

function sendMail() {
	var params = {
		name: document.getElementById('name').value,
		email: document.getElementById('email').value,
		theme: document.getElementById('theme').value,
		message: document.getElementById('text').value,
	};

	const serviceId = 'service_q17ckzi';
	const templateId = 'template_nblvrys';

	email.js.send(serviceId, templateId, params).then((res) => {
		document.getElementById('name').value = '';
		document.getElementById('email').value = '';
		document.getElementById('theme').value = '';
		document.getElementById('text').value = '';
		console.log(res);
		alert('Ваше сообщение успешно отправлено');
	});
	// .catch((err) => console.log(err));
}

// 	if (response.ok) {
// 		let result = await response.json();
// 		alert(result.message);
// 		// чистка формы при отправке
// 		form.reset();
// 	} else {
// 		alert('ошибка');
// 	}

// 	// отменяет стандартное поведение кнопки и теперь действия будут происходить в js нижу

// 	// валидация форм

// 	// созданной переменной передаю работу функции formValidate
// }

// function formValidate(form) {
// 	let err = false;
// 	let formReq = form.find('._req');
// 	for (let index = 0; index < formReq.length; index++) {
// 		const input = formReq[index];

// 		formRemoveError(input);

// 		if (input.value == '') {
// 			formAddError(input);
// 			err = true;
// 		}
// 		if (input.id == 'email' && emailTest(input)) {
// 			formAddError(input);
// 			err = true;
// 		}
// 	}
// 	if (err) throw 'Fill the form please';
// }

// function formAddError(input) {
// 	$(input).parent().addClass('_error');
// }
// function formRemoveError(input) {
// 	$(input).parent().removeClass('_error');
// }
// // тест функция email
// function emailTest(input) {
// 	// регулярным выражением проверяет есть ли такие символы, их количество
// 	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
// }
