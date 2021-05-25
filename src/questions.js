export default [
	{
		question: "Значениями каких типов может быть сравнение?",
		type: "radio",
		answers: ["undefined", "boolean", "null", "number"],
		answer: 1
	},
	{
		question: "Как создать многомерный массив?",
		type: "radio",
		answers: [
			"var matrix = new Multi([1, 2, 3], [4, 5, 6], [7, 8, 9])",
			"var matrix = new MultiArr([1, 2, 3], [4, 5, 6], [7, 8, 9])",
			"var matrix = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]",
			"Нет правильных ответов"
		],
		answer: 2
	},
	{
		question: "Как добавить несколько значение в начало массива var a = ['c', 'd']?",
		type: "radio",
		answers: ["arr['a', 'b']", "arr.unshift('a', 'b')", "arr.add('a', 'b')", "Нет правильных ответов"],
		answer: 1
	},
	{
		question: "Выберите правильный вариант обьявления функции без параметров?",
		type: "radio",
		answers: ["function.checkInfo() { код }", "function checkInfo() { код }", "function: checkInfo() { код }", "function checkInfo { код }"],
		answer: 1
	},
	{
		question: "Как все символы в строке str перевести в верхний регистр?",
		type: "radio",
		answers: ["str.toUpperCase()", "Нет правильных ответов", "Up(str)", "toUpperCase(str)"],
		answer: 0
	},
	{
		question: "Как отсортировать массив var arr = [3, 1, 2]?",
		type: "radio",
		answers: ["arr.sort()", "Нет правильных ответов", "sort(arr)", "sortarr(arr)"],
		answer: 0
	},
	{
		question: "Какое выражение запустит код через секунду (по таймеру)?",
		type: "radio",
		answers: [
			"setTimeout(function () {}, 1000)",
			"Правильных вариантов нет",
			"setTimer(function () {}, 1000)",
			"goInTime(function () {}, 1000)"
		],
		answer: 0
	},
	{
		question: "Можно ли из функции получить доступ к внешним переменным (обьявленным за пределами функции)?",
		type: "radio",
		answers: ["Да, но только на чтение", "Да, как на запись, так и на чтение", "Нет"],
		answer: 1
	},
	{
		question: "Выберите правильный синтаксис цикла while:",
		type: "radio",
		answers: ["while ( условие ) { код }", "{ код } while ( условие )", "while условие { код }", "do while ( условие ) { код }"],
		answer: 0
	},
	{
		question: "С помощью каких тегов можно добавить скрипт на JavaScript в HTML-документ?",
		type: "radio",
		answers: ["<script>", "<program>", "<link>", "<javascript>"],
		answer: 0
	},
	{
		question: "Как узнать длину строки a?",
		type: "radio",
		answers: ["strlen(a)", "Нет правильных ответов", "a.length", "count(a)"],
		answer: 2
	},
	{
		question: "Как создать переменную с типом 'строка'?",
		type: "radio",
		answers: ["$a = ''", "var a = ''", "def a = ''", "var a = new String()"],
		answer: 1
	},
	{
		question: "Какие типы данных существуют в языке JavaScript?",
		type: "checkbox",
		answers: ["int", "string", "boolean", "char", "short", "double"],
		answer: [0, 1, 2]
	}
]