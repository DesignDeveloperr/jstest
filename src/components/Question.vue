<template>
	<div class="question" v-if="id === currentIndex">
		<h1>{{ question.question }}</h1>
		<div v-for="(answer, index) in question.answers" :key="index">
			<input :type="question.type" :id="id + '_' + index" :name="id" :value="index" @click="setAnswer(index)">
			<label :for="id + '_' + index">{{ answer }}</label>
		</div>
		<p>Вопрос {{ currentIndex + 1 }} из {{ $parent.questions.length }}</p>
	</div>
</template>

<script>
export default {
	name: "RadioQuestion",
	props: ['question', 'id', 'currentIndex'],
	data() {
		return {
			answers: []
		}
	},
	methods: {
		setAnswer(answer) {
			if (this.question.type === "checkbox") {
				if (this.answers.includes(answer)) {
					this.answers = this.answers.filter(item => item !== answer)
				} else {
					this.answers.push(answer)
				}
				this.$emit('onAnswer', this.answers.length === 0 ? null : this.answers.sort())
			} else {
				this.$emit('onAnswer', answer)
			}
		}
	}
}
</script>

<style scoped>
	.question {
		padding: 20px;
		background-color: rgba(0,139,175,0.51);
		margin-top: 50px;
	}

	h1 {
		margin: 0 0 30px 0;
		font-size: 25px;
	}

	.question div {
		display: flex;
		margin-top: 10px;
	}

	input {
		width: 25px;
		height: 25px;
		margin: 0 10px 0 0;
	}

	p {
		margin-top: 30px;
	}
</style>