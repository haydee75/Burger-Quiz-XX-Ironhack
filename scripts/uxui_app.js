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
		"Que signifie UX ?<br><img height=200px src='https://media.giphy.com/media/7K3p2z8Hh9QOI/giphy.gif' alt=''>",
		[
			"User eXperience",
			"User eXtra",
			"User Xylophone"
		],
		"User eXperience"),

	new Question(
		"Quelles sont les 3 étapes pour constuire un persona ?<br><img height=190px src='https://media.giphy.com/media/AHU01NRuiCK5y/giphy.gif' alt=''>",
		[
			"Conception Organisation Redaction",
			"Recherche Analyse Modélisation",
			"Evaluation Conversation Procrastination"
		],
		"Recherche Analyse Modélisation"),
	
	new Question(
		"Où placer le logo pour optimiser l'identification de la marque ?<br><img height=190px src='https://media.giphy.com/media/26ni7e85ldigoAvK0/giphy.gif'>",
		[
			"En bas à droite",
			"En haut à gauche",
			"En plein milieu de la page"
		],
		"En haut à gauche"),

	new Question(
		"Quel sont les outils pratiques pour un UI designer ?<br><img height=190px src='https://media.giphy.com/media/yhcqymRLlv7K8/giphy.gif'>",
		[
			"Café Donut Slack",
			"Paint PowerPoint Muse",
			"Sketch Invision Adobe"
		],
		"Sketch Invision Adobe"),

	new Question(
		"Laquelle de cette affirmation est vraie ?<br><img height=210px src='https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif'>",
		[
			"Le site de wikipedia est une référence en matière de design",
			"Apple a annoncé que les prochains MacBook Pro seront fournis sans écran",
			"Awwwards est un site sur lequel on peut voir le meilleur de la conception Web innovante"
		],
		"Awwwards est un site sur lequel on peut voir le meilleur de la conception Web innovante")

];

var quiz = new Quiz(questions);

// Cookies

quiz.readCookie();
//document.getElementById('cook').innerHTML = quiz.score;
document.getElementById("img_score").src = "points/p"+quiz.score+".jpg";
fillQuizz();