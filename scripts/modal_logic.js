$(document).ready(function () {
	const modalClose = $('[data-close]');

	modalClose.on('click', closeModal);

	$('.portfolio__col').on('click', openModal);

	$('.modal').on('click', closeModal);

	$('#project_universal').on('click', closeModal);

	$('.footer__right').on('click', (event) => switchModal(event, 'right'));
	$('.footer__left').on('click', (event) => switchModal(event, 'left'));

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
		modalShow.find('.modal__dialog')[0].id = '';
		$('body').removeClass('no-scroll');
	}, 200);
}

function openModal(event) {
	event.preventDefault();

	refreshModalContent(this.id);
	let modal = $('#project_universal');
	modal.addClass('show');
	modal.find('.modal__dialog')[0].id = this.id;
	$('body').addClass('no-scroll');

	setTimeout(function () {
		modal.find('.modal__dialog').css({
			transform: 'scale(1)',
		});
	}, 200);
}

function refreshModalContent(id) {
	let modal = $('#project_universal');

	modal.find('.modal__dialog')[0].id = id;
	modal.find('.title')[0].textContent = projects._modals[id].name;
	modal.find('.content__text')[0].textContent = projects._modals[id].p;
	modal.find('.preview__img')[0].src = projects._modals[id].img;
}

function switchModal(event, side) {
	event.preventDefault();

	let modal = $('#project_universal');
	const id =
		(Number(modal.find('.modal__dialog')[0].id) +
			(side == 'right' ? 1 : projects._modals.length - 1)) %
		projects._modals.length;

	console.log(
		id,
		modal.find('.modal__dialog')[0].id,
		side,
		projects._modals.length
	);

	refreshModalContent(id);
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
	addModal(name, text, img_prev, img) {
		const modal = new Modal(name, text, img_prev, img);
		this._modals.push(modal);
		generateProjectHTML(modal, this._modals.length - 1);
	}
}

// modal имеет тип класса Modal
function generateProjectHTML(modal, id) {
	const portfolio = document.getElementsByClassName('projects__portfolio');

	const portfolio_col = document.createElement('div');
	portfolio_col.classList.add('portfolio__col');
	portfolio_col.id = id;

	const portfolio__works = document.createElement('div');
	portfolio__works.classList.add('portfolio__works');

	const works_item = document.createElement('div');
	works_item.classList.add('works__item');

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
