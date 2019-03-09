function fillQuizz(){
	if(quiz.isEnded()){
		quiz.writeCookie(quiz.score);
        //document.getElementById('cook').innerHTML = quiz.score;
		setTimeout(function(){
  			this.showScores();
  		}, 1000);
	}else{
		
		// Afficher les questions

		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;
		
		// Afficher les choix de réponses

		var choices = quiz.getQuestionIndex().choices;
		for (var i = 0; i < choices.length; i++){
			var element = document.getElementById("choice"+i);
			element.innerHTML = choices[i];
			guess("btn" + i, choices[i]);
		}
		//showProgress();
	}
}

function guess(id, guess){
	var button = document.getElementById(id);
	button.onclick = function(){
		quiz.guess(guess);
		fillQuizz();
	}
}

// function showProgress(){
// 	var currentQuestionNumber = quiz.questionIndex + 1;
// 	var element = document.getElementById('progress');
// 	element.innerHTML = "QUESTION " + currentQuestionNumber + " SUR " + quiz.questions.length;
// }

function showScores(){
	location.href = "intros/menu_intro.html";
	// var gameOverHtml = "<a href='intros/menu_intro.html'>Menus<a/>";
	// //gameOverHtml += "<h4 id='score'>" + quiz.score + "</h4>";
	// var element = document.getElementById('quiz');
	// element.innerHTML = gameOverHtml;
}

var questions = [

	new Question(
		"Je suis d’origine Nord américaine<br><img width=300px src='https://media.giphy.com/media/gqA7PiShgcUtq/giphy.gif' alt=''>",
		[
			"Ironhack",
			"Anorak",
			"Les deux"
		],
		"Les deux"),

	new Question(
		"Avec moi c’est allure décontractée par tout temps<br><img width=300px src='https://media.giphy.com/media/GwGXoeb0gm7sc/giphy.gif' alt=''>",
		[
			"Ironhack",
			"Anorak",
			"Les deux"
		],
		"Les deux"),
	
	new Question(
		"Mon nom veut dire « vent » en inuit<br><img width=300px src='https://media.giphy.com/media/d1E1pZ1cdgWmY0hy/giphy.gif'>",
		[
			"Ironhack",
			"Anorak",
			"Les deux"
			
		],
		"Anorak"),

	new Question(
		"Je suis noté 4,9 sur Google<br><img width=300px src='https://media.giphy.com/media/MRDICUC5enJy8/giphy.gif'>",
		[
			"Ironhack",
			"Anorak",
			"Les deux"
		],
		"Ironhack"),

	new Question(
		"J’ai un look bleu et blanc<br><img height=210px src='https://media.giphy.com/media/y3QOvy7xxMwKI/giphy.gif'>",
		[
			"Ironhack",
			"Anorak",
			"Les deux"
		],
		"Ironhack"),

	new Question(
		"Je vaux 15 points au scrabble<br><img height=200px src='https://media.giphy.com/media/mrYOnKZ7MJFCM/giphy.gif'>",
		[
			"Ironhack",
			"Anorak",
			"Les deux"
		],
		"Anorak"),

	new Question(
		"Parfois je transpire dedans<br><img height=210px src='https://media.giphy.com/media/5xtDarIN81U0KvlnzKo/giphy.gif'>",
		[
			"Ironhack",
			"Anorak",
			"Les deux"
		],
		"Ironhack"),

	new Question(
		"J’ai plus de 30 000 abonnées sur mon compte facebook<br><img width=300px src='https://media.giphy.com/media/dSdvPrKU0w8WGo4c9L/giphy.gif'>",
		[
			"Ironhack",
			"Anorak",
			"Les deux"
		],
		"Ironhack"),

	new Question(
		"J'ai mon propre emoji sur l'iphone<br><img width=300px src='https://media.giphy.com/media/3ov9k2rS9opDWfLLnW/giphy.gif'>",
		[
			"Ironhack",
			"Anorak",
			"Les deux"
		],
		"Anorak")

];

var quiz = new Quiz(questions);

// Cookies

quiz.readCookie();
//document.getElementById('cook').innerHTML = quiz.score;
document.getElementById("img_score").src = "points/p"+quiz.score+".jpg";
fillQuizz();