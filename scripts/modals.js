// база данных для модальных окон
projects.addModal(
	// название проекта
	'Портфолио',
	// текст в окне
	`Этот сайт написан при помощи препроцессора scss, классы наименованы в соответсвии с BEM методологией, библиотекой jquery
	slick slider для создания слайдера с моими грамотами и сертификатами, также иконочные шрифты. 
	Макет создавался в FIGMA. 
	Адаптивная верстка для различных устройств реализована при помощи брейкпоинтов в медиазапросах максимальной ширины экрана.
	Эти модальные окна генерируются сами, используя что-то наподобие внутренней 
	базы данных, написаной на js и натягивающихся на написанные мной стили`,
	// пепвью-картинка
	'./img/projects_prev/1.PNG',
	// картинка в окне
	'./img/project_modal/1.PNG'
);
projects.addModal(
	'electron-приложение',
	`Мое приложение созданное при помощи фрэймвока 
	electron. Этот фреймворк использует веб-интерфейс. На его основе сделаны такие популярные приложения как
	VS code, Skype и Discord. Для создания мне пригодились навыки работы с API для взятия данных о погоде на openweather. API,
	менеджером пакетов npm для установки node modules фрэймворка, создание json фалйов`,
	'./img/projects_prev/2.png',
	'./img/project_modal/2.PNG'
);
projects.addModal(
	'анимированный призрак',
	`Создание анимированного призрака при помощи HTML5, CSS3. при создании проекта призрак рисовался мною при помощи тегов span,
	а анимировался при помощи ключевых кадров @keyframses, показывающих как будет выглядеть анимированный элемент в конкретный момент времени.
	посмотреть сайт: https://crossovka.github.io/animated_ghost/`,
	'./img/projects_prev/3.gif',
	'./img/project_modal/3.PNG'
	// https://crossovka.github.io/animated_ghost/
);
projects.addModal(
	'Верстка лендинга',
	`Вертска тематического макета, взятого в  открытом доступе в интернете для практики своих навыков написания
	на HTML, CSS а также верстки на flex'боксах`,
	'./img/project_modal/4.PNG',
	'./img/projects_prev/4.PNG'
);
projects.addModal(
	'Анимация загрузки на сайте',
	`Красивая анимация загрузки на сайте, которую я планирую использовать дальнейшем в своих проетах. Реализовано это при помощи Java script
	и @keyframes в CSS
	посмотреть сайт: https://crossovka.github.io/loading/`,
	'./img/projects_prev/5.gif',
	'./img/project_modal/5.PNG'
	// https://crossovka.github.io/loading/
);
projects.addModal(
	'Игра на unity',
	`разрабатывал небольшую игру-кликер по тематике Brawl Stars в Unity. В процессе пришлось освоить его интерфейс,
	поработать со спрайтами чтобы добавить персонажа, написать скрипты для добавлния счета сверху и его работы.
	в дальнейшем когда кликер будет доработан ипортирую проект в .apk файл чтобы установить на телефон его себе и своим друзьям`,
	'./img/projects_prev/6.png',
	'./img/project_modal/6.png'
);
projects.addModal(
	'Интерактивный сайт',
	`Красивый сайт с которым может взаимодействовать пользователь. При нажатии лампочку на неё она включается 
	или выключается и с плавной анимацией появляется мягкий свет. В Джаваскрипт файле в стрелочной функции присваиваются/отбираются
	классы для элементов в html и сайт становится интерактивным
	посмотреть сайт: https://crossovka.github.io/lamp/`,
	'./img/projects_prev/7.PNG',
	'./img/project_modal/7.PNG'
	// https://crossovka.github.io/lamp/
);
projects.addModal(
	'Верстка лендинга',
	`Вертска тематического макета, взятого в  открытом доступе в интернете для практики своих навыков написания
	на HTML, CSS а также верстки на flex'боксах`,
	'./img/projects_prev/8.PNG',
	'./img/project_modal/8.PNG'
);
projects.addModal(
	'Интерактивная карта',
	`У меня как и у многих игроков в игре ALBION ONLINE есть проблема с ориентированием на одной из игровых локаций, так как переходы внутри неё
	постоянно обнавляются, как и ресурсы в них. Поэтому выслушав предложения согильдейцев я начал разрабатывать интерактивную карту, в основе которой
	лежит библиотека на js Leaflet. Справа можно отмечать точками локации и на их соединении видно время закрытия порталов, а кликнув на одну из них
	слева можно посмотреть ресурсы и их уровень, подземелья которые тоже постоянно обновляются. Данные будут браться с Сайта Albion2d.
	Этот проект в своем окончательном варианте будет нести практическую пользу не только мне, но и моим согильдейцам любимой игре`,
	'./img/project_modal/9.PNG',
	'./img/projects_prev/9.png'
);
