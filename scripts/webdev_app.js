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
		showProgress();
	}
}

function guess(id, guess){
	var button = document.getElementById(id);
	button.onclick = function(){
		quiz.guess(guess);
		fillQuizz();
	}
}

function showProgress(){
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById('progress');
	element.innerHTML = "QUESTION " + currentQuestionNumber + " SUR " + quiz.questions.length;
}

function showScores(){
	location.href = "intros/addition_intro.html";
	// var gameOverHtml = "<a href='intros/addition_intro.html'>L'addition<a/>";
	// //gameOverHtml += "<h4 id='score'>" + quiz.score + "</h4>";
	// var element = document.getElementById('quiz');
	// element.innerHTML = gameOverHtml;
}

var questions = [

	new Question(
		"Que signifie HTML ?<br><img width=300px src='https://media.giphy.com/media/3oriO8RY4erFEUpHZm/giphy.gif' alt=''>",
		[
			"HyperLinks and Text Markup Language",
			"HyperText Markup Language",
			"Ha te mi lo"
		],
		"HyperText Markup Language"),

	new Question(
		"Lequel de ces noms de couleurs n'est pas reconnu en css ?<br><img height=180px src='https://media.giphy.com/media/yYSSBtDgbbRzq/giphy.gif' alt=''>",
		[
			"aqua",
			"snow",
			"rain"
		],
		"rain"),
	
	new Question(
		"Parmis ces propositions, laquelle n'est pas un framework de test javascript?<br><img height=180px src='https://media.giphy.com/media/aNTYdoZaKU7YY/giphy.gif'>",
		[
			"chai",
			"latte",
			"mocha"
		],
		"latte"),

	new Question(
		"Comment appeler une fonction nommé myFunction ?<br><img width=300px src='https://media.giphy.com/media/3o7TKv18TzseC51fnG/giphy.gif'>",
		[
			"myFunction()",
			"function myFunction()",
			"en composant son numéro"
		],
		"myFunction()"),

	new Question(
		"Quels sont les types de nombres définis en JavaScript ?<br><img height=180px src='https://media.giphy.com/media/3o6ZsYwoirHUIj5Em4/giphy.gif'>",
		[
			"rational irrational",
			"simple doubles",
			"floats integers"
		],
		"floats integers")

];

var quiz = new Quiz(questions);

// Cookies

quiz.readCookie();
//document.getElementById('cook').innerHTML = quiz.score;
document.getElementById("img_score").src = "points/p"+quiz.score+".jpg";
fillQuizz();