$(document).ready(function () {
	// вызываются модальные окна по этому атрибуту. в константу сохраняем все кнопки у которых есть атрибут data-modal
	const modalCall = $('[data-modal]');
	const modalClose = $('[data-close]');

	modalCall.on('click', openModal);
	// function (event) {
	// 		// отменяет стандартное поведение кнопок
	// 		event.preventDefault();
	// 		//  при нажатии на кнопку в переменную сохраняется значение дата атрибута в кнопку по которой кликнули
	// 		let $this = $(this);
	// 		// в переменную модал айди сохраняется значение дата атрибута дата модал
	// 		let modalId = $this.data('modal');

	// 		// вызываю модальное окно с помощью селектора подставляя туба modalId. data атрибут писал в html с решёткой чтобы сразу подставиь тут modalId в таком виде
	// 		$(modalId).addClass('show')
	// 		// выдается класс для body чтобы при переизбытке контента в модальном окне скролл был 1 и правильный
	// 		$("body").addClass('no-scroll');

	// 		// через 200 милесикунд задержки меняются свойства для модального окна
	// 		// при закрытии нужно тоже убирать трансформацию (прописал после закрытия)
	// 		setTimeout(function() {
	// 			// для модал диалога в этом окне прописываю после того как его нашел поменять css свойство
	// 			$(modalId).find(".modal__dialog").css({
	// 				transform: "scale(1)"
	// 			});
	// 		}, 200);
	// });

	modalClose.on('click', closeModal);

	$('.modal').on('click', closeModal);

	$('.footer__right').on('click', nextModal);

	$('.modal__dialog').on('click', function (event) {
		event.stopPropagation();
	});

	$(document).keydown(function (event) {
		if (event.code == 'Escape') closeModal(event);
	});
});

function closeModal(event) {
	event.preventDefault();

	let modalShow = $('.modal.show');
	modalShow.find('.modal__dialog').css({
		transform: 'scale(0)',
	});

	setTimeout(function () {
		modalShow.removeClass('show');
		$('body').removeClass('no-scroll');
	}, 200);
}

function openModal(event) {
	event.preventDefault();

	let $this = $(this);
	let modal = $($this.data('modal'));
	modal.addClass('show');
	$('body').addClass('no-scroll');

	setTimeout(function () {
		modal.find('.modal__dialog').css({
			transform: 'scale(1)',
		});
	}, 200);
}

function nextModal(event) {
	event.preventDefault();

	// $this.data('modal'), nextModal, modal);
	let modalShow = $('.modal.show');
	let footerRight = modalShow.find('footer__right');
	console.log(modalShow, footerRight);
	// let nextModal = "#project_" + (Number(`${$this.data('modal')}`.replace('#project_','')) + 1)
}

class Modal {
	name;
	img_prev;
	img;
	p;

	constructor(name, paragraph, img_prev, img) {
		this.name = name;
		this.p = paragraph;
		this.img_prev = img_prev;
		this.img = img;
	}
}

// ВНУТРЕННЯЯ БАЗА ДАННЫХ ПРОЕКТОВ!!!
class Modals {
	_modals = [];
	// modal имеет тип класса Modal
	addModal(modal) {
		this._modals.push(modal);
		generateProjectHTML(modal);
	}
}

// modal имеет тип класса Modal
function generateProjectHTML(modal) {
	const portfolio = document.getElementsByClassName('projects__portfolio');

	const portfolio_col = document.createElement('div');
	portfolio_col.classList.add('portfolio__col');

	const portfolio__works = document.createElement('div');
	portfolio__works.classList.add('portfolio__works');

	const works_item = document.createElement('div');
	works_item.classList.add('works__item');

	// если поменяю ч img  на div в html то  поменять тут
	const works_image = document.createElement('img');
	works_image.classList.add('works__image');
	works_image.src = modal.img_prev;

	const works_content = document.createElement('div');
	works_content.classList.add('works__content');

	const works_title = document.createElement('div');
	works_title.classList.add('works__title');
	works_title.append(modal.name);

	portfolio_col.append(portfolio__works);
	portfolio__works.appendChild(works_item);
	works_item.appendChild(works_image);
	works_item.appendChild(works_content);
	works_content.appendChild(works_title);
	portfolio[0].appendChild(portfolio_col);
}

const projects = new Modals();

projects.addModal(
	new Modal(
		'suka aaa',
		'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum',
		'./img/logo.svg',
		'./img/hello-img.png'
	)
);
