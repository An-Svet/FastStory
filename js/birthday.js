var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
// var div3 = document.getElementById("div3");
var div5 = document.getElementById("div5");
var div6 = document.getElementById("div6");
// div1.style.color = "blue";
//document.querySelector('#div1').innerHTML = "<p>hello world</p>";

var arr3 = new Array("Грут",
	"Клеопатра",
	"Ребенок с интеллектом 30-летнего",
	"Человек-паук",
	"Мастер Йода",
	"Богатый пенсионер",
	"Мститель",
	"Дарт Вейдер",
	'Таксист',
	'Продавец душ',
	'Актер массовок',
	'Писатель некрологов',
	'Депутат',
	'Телефонный мошенник',
	"Лидер артхаусной инди-рок-рэп-панк группы",
	"Тестировщик пляжей",
	"Спаситель пельмешек",
	"Интеллигент",
	"Адвокат по защите прав котиков"
);

document.querySelector('#div1').innerHTML = (arr3[Math.floor(Math.random() * ((arr3.length - 1) - 0 + 1))] + "<br>");
console.log(typeof div1);

var arr2 = new Array("Патологический врун",
	"Чертовски умен",
	"Добрее Леопольда",
	"Боишься всего на свете, даже своей тени",
	"Очень много и глупо шутишь",
	"До безумия помешан на собственной внешности",
	"В любой ситуации сможешь заработать денег",
	"Виновный во всем и постоянно извиняешься",
	"Не умеешь врать",
	"Хочешь захватить галактику",
);
document.querySelector('#div2').innerHTML = (arr2[Math.floor(Math.random() * ((arr2.length - 1) - 0 + 1))] + "<br>");

// var arr = new Array('Психиатр',
// 	'Таксист',
// 	'Продавец душ',
// 	'Актер массовок',
// 	'Писатель некрологов',
// 	'Депутат',
// 	'Телефонный мошенник',
// 	"Лидер артхаусной инди-рок-рэп-панк группы",
// 	"Тестировщик пляжей",
// 	"Спаситель пельмешек",
// 	"Интеллигент",
// 	"Адвокат по защите прав котиков"
// );
// document.querySelector('#div3').innerHTML = (arr[Math.floor(Math.random() * ((arr.length - 1) - 0 + 1))]);


var arr5 = new Array('Модный ресторан',
	'Жаркий пляж на Марсе',
	'Пустая дорога ночью',
	'Душный переполненный троллейбус',
	'Рублевка',
	'Аэропорт в Тбилиси',
	"Космический корабль",
	"Логово дракона",
	"Привокзальная шаурмечная",
	"Римский колизей"
);
document.querySelector('#div5').innerHTML = (arr5[Math.floor(Math.random() * ((arr5.length - 1) - 0 + 1))]);

var arr6 = new Array('Взяли в заложники',
	'Нужна помощь котику',
	'Медкомиссия в военкомат',
	'Экзамен по философии',
	'Новогоднее видеобращение тебя',
	'Нахамил Тайсон',
	"Похитили пришельцы",
	"Интерьвью у Дудя",
	"Рэп-батл с Пушкиным",
	"Нападение Таноса на Челябинск",
);
document.querySelector('#div6').innerHTML = (arr6[Math.floor(Math.random() * ((arr6.length - 1) - 0 + 1))]);

// var arr = new Array('счастья', 'здоровья', 'удачи', 'любви', 'радости');
// document.write("Желаю " + arr[Math.floor(Math.random() * ((arr.length - 1) - 0 + 1))]);
// location.reload();

