(function(e){function n(n){for(var r,o,a=n[0],u=n[1],c=n[2],l=0,p=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(n);while(p.length)p.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,a=1;a<t.length;a++){var u=t[a];0!==s[u]&&(r=!1)}r&&(i.splice(n--,1),e=o(o.s=t[0]))}return e}var r={},s={app:0},i=[];function o(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=r,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/jstest/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=n,a=a.slice();for(var c=0;c<a.length;c++)n(a[c]);var d=u;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"013f":function(e,n,t){"use strict";t("bbde")},"452c":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("h1",[e._v("Тест по языку JavaScript")]),e.currentIndex<e.questions.length?t("div",[e._l(e.questions,(function(n,r){return t("Question",{key:r,attrs:{question:n,id:r,currentIndex:e.currentIndex},on:{onAnswer:e.getAnswer}})})),t("button",{on:{click:e.checkAnswer}},[e._v("Далее")])],2):t("div",[t("h1",[e._v("Вы ответили на "+e._s(e.passed)+" вопросов из "+e._s(e.questions.length))]),t("h1",[e._v("Ваша оценка "+e._s(e.getMark))]),t("button",{on:{click:e.resetTest}},[e._v("Пройти тест заново")])])])},i=[],o=(t("fb6a"),t("a15b"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.id===e.currentIndex?t("div",{staticClass:"question"},[t("h1",[e._v(e._s(e.question.question))]),e._l(e.question.answers,(function(n,r){return t("div",{key:r},[t("input",{attrs:{type:e.question.type,id:e.id+"_"+r,name:e.id},domProps:{value:r},on:{click:function(n){return e.setAnswer(r)}}}),t("label",{attrs:{for:e.id+"_"+r}},[e._v(e._s(n))])])})),t("p",[e._v("Вопрос "+e._s(e.currentIndex+1)+" из "+e._s(e.$parent.questions.length))])],2):e._e()}),a=[],u=(t("caad"),t("2532"),t("4de4"),{name:"RadioQuestion",props:["question","id","currentIndex"],data:function(){return{answers:[]}},methods:{setAnswer:function(e){"checkbox"===this.question.type?(this.answers.includes(e)?this.answers=this.answers.filter((function(n){return n!==e})):this.answers.push(e),this.$emit("onAnswer",0===this.answers.length?null:this.answers.sort())):this.$emit("onAnswer",e)}}}),c=u,d=(t("638e"),t("2877")),l=Object(d["a"])(c,o,a,!1,null,"135b0d45",null),p=l.exports,f=[{question:"Значениями каких типов может быть сравнение?",type:"radio",answers:["undefined","boolean","null","number"],answer:1},{question:"Как создать многомерный массив?",type:"radio",answers:["var matrix = new Multi([1, 2, 3], [4, 5, 6], [7, 8, 9])","var matrix = new MultiArr([1, 2, 3], [4, 5, 6], [7, 8, 9])","var matrix = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]","Нет правильных ответов"],answer:2},{question:"Как добавить несколько значение в начало массива var a = ['c', 'd']?",type:"radio",answers:["arr['a', 'b']","arr.unshift('a', 'b')","arr.add('a', 'b')","Нет правильных ответов"],answer:1},{question:"Выберите правильный вариант обьявления функции без параметров?",type:"radio",answers:["function.checkInfo() { код }","function checkInfo() { код }","function: checkInfo() { код }","function checkInfo { код }"],answer:1},{question:"Как все символы в строке str перевести в верхний регистр?",type:"radio",answers:["str.toUpperCase()","Нет правильных ответов","Up(str)","toUpperCase(str)"],answer:0},{question:"Как отсортировать массив var arr = [3, 1, 2]?",type:"radio",answers:["arr.sort()","Нет правильных ответов","sort(arr)","sortarr(arr)"],answer:0},{question:"Какое выражение запустит код через секунду (по таймеру)?",type:"radio",answers:["setTimeout(function () {}, 1000)","Правильных вариантов нет","setTimer(function () {}, 1000)","goInTime(function () {}, 1000)"],answer:0},{question:"Можно ли из функции получить доступ к внешним переменным (обьявленным за пределами функции)?",type:"radio",answers:["Да, но только на чтение","Да, как на запись, так и на чтение","Нет"],answer:1},{question:"Выберите правильный синтаксис цикла while:",type:"radio",answers:["while ( условие ) { код }","{ код } while ( условие )","while условие { код }","do while ( условие ) { код }"],answer:0},{question:"С помощью каких тегов можно добавить скрипт на JavaScript в HTML-документ?",type:"radio",answers:["<script>","<program>","<link>","<javascript>"],answer:0},{question:"Как узнать длину строки a?",type:"radio",answers:["strlen(a)","Нет правильных ответов","a.length","count(a)"],answer:2},{question:"Как создать переменную с типом 'строка'?",type:"radio",answers:["$a = ''","var a = ''","def a = ''","var a = new String()"],answer:1},{question:"Какие типы данных существуют в языке JavaScript?",type:"checkbox",answers:["int","string","boolean","char","short","double"],answer:[0,1,2]}],h={name:"App",components:{Question:p},data:function(){return{currentIndex:0,questions:[],answer:null,passed:0}},computed:{getCurrentQuestion:function(){return this.questions[this.currentIndex]},getMark:function(){return this.passed>2?this.passed:2}},methods:{getRandomQuestions:function(){return f.sort((function(){return Math.random()-.5})).slice(0,5)},getAnswer:function(e){console.log(e),this.answer=e},checkAnswer:function(){null!==this.answer?("checkbox"===this.getCurrentQuestion.type?this.answer.join("")===this.getCurrentQuestion.answer.join("")?(this.passed++,this.currentIndex++):this.currentIndex++:this.answer===this.getCurrentQuestion.answer?(this.passed++,this.currentIndex++):this.currentIndex++,this.answer=null):alert("Выберите ответ!")},resetTest:function(){this.currentIndex=0,this.passed=0,this.answer=null,this.questions=this.getRandomQuestions()}},mounted:function(){this.questions=this.getRandomQuestions()}},w=h,b=(t("013f"),t("b0a0"),Object(d["a"])(w,s,i,!1,null,"435026ab",null)),v=b.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(v)}}).$mount("#app")},"638e":function(e,n,t){"use strict";t("bea3")},b0a0:function(e,n,t){"use strict";t("452c")},bbde:function(e,n,t){},bea3:function(e,n,t){}});
//# sourceMappingURL=app.35baf362.js.map