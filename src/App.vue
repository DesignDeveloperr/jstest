<template>
	<div id="app">
		<h1>Тест по языку JavaScript</h1>
		<div v-if="currentIndex < questions.length">
			<Question @onAnswer="getAnswer" v-for="(question, index) in questions" :question="question" :id="index" :key="index" :currentIndex="currentIndex"></Question>
			<button @click="checkAnswer">Далее</button>
		</div>
		<div v-else>
			<h1>Вы ответили на {{ passed }} вопросов из {{ questions.length }}</h1>
			<h1>Ваша оценка {{ getMark }}</h1>
			<button @click="resetTest">Пройти тест заново</button>
		</div>
	</div>
</template>

<script>
import Question from "@/components/Question";
import questions from "@/questions";

export default {
	name: 'App',
	components: {Question},
	data() {
		return {
			currentIndex: 0,
			questions: [],
			answer: null,
			passed: 0
		}
	},
	computed: {
		getCurrentQuestion() {
			return this.questions[this.currentIndex]
		},
		getMark() {
			return this.passed > 2 ? this.passed : 2
		}
	},
	methods: {
		getRandomQuestions() {
			return questions.sort(() => Math.random() - 0.5).slice(0, 5)
		},
		getAnswer(data) {
			console.log(data)
			this.answer = data
		},
		checkAnswer() {
			if (this.answer !== null) {
				if (this.getCurrentQuestion.type === "checkbox") {
					if (this.answer.join('') === this.getCurrentQuestion.answer.join('')) {
						this.passed++
						this.currentIndex++
					} else {
						this.currentIndex++
					}
				} else {
					if (this.answer === this.getCurrentQuestion.answer) {
						this.passed++
						this.currentIndex++
					} else {
						this.currentIndex++
					}
				}
				this.answer = null
			} else {
				alert('Выберите ответ!')
			}
		},
		resetTest() {
			this.currentIndex = 0
			this.passed = 0
			this.answer = null
			this.questions = this.getRandomQuestions()
		}
	},
	mounted() {
		this.questions = this.getRandomQuestions()
	}
}
</script>

<style scoped>
	#app {
		width: 600px;
		margin: 0 auto;
	}

	h1 {
		text-align: center;
	}

	button {
		width: 200px;
		height: 50px;
		display: block;
		margin: 10px auto 0 auto;
		background-color: #fff;
		font-family: Montserrat, sans-serif;
	}
</style>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

	html {
		font-family: Montserrat, sans-serif;
	}
</style>