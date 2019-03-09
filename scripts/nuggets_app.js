function fillQuizz(){
	if(quiz.isEnded()){
        // // Renvoie le score
       
        quiz.writeCookie(quiz.score);
        //document.getElementById('cook').innerHTML = quiz.score;
        document.getElementById("img_score").src = "points/p"+quiz.score+".jpg";
        // el+=scoreCookie;
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
	location.href = "intros/sel_ou_poivre_intro.html";
	// var gameOverHtml = "<a href='intros/sel_ou_poivre_intro.html'>Sel ou Poivre<a/>";
	// //gameOverHtml += "<h4 id='score'>" + quiz.score + "</h4>";
	// var element = document.getElementById('quiz');
	// element.innerHTML = gameOverHtml;
}

var questions = [

	new Question(
		"D'ou provient cette image ?<br><img width=400px src='https://cdn.wework.com/locations/image/98ac69f0-0b89-11e8-b28f-1202be33576a/20161102_11_John_Street-4.jpg?w=1440' alt='ironhackamsterdam'>",
		[
			"De l'espace VIP hypster de l'aéroport CDG",
			"D'un jeu vidéo suédois",
			"Du campus Ironhack d'Amsterdam",
			"De la cellule de Carlos Ghosn"
		],
		"Du campus Ironhack d'Amsterdam"),

	new Question(
		"Quel métier est le plus prisé à New York ?<br><img width=400px src='https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/01/31/09/new-york-statue-of-liberty.jpg' alt='newyorkcity'>",
		[
			"Ingénieur.se Développeur.se Java",
			"Chauffeur de Taxi",
			"Analyste financier",
			"Eboueur.se"
		],
		"Eboueur.se"),
	
	new Question(
		"Quelle info concernant Ironhack est vraie ?<br><img width=400px src='https://www.ironhack.com/0be4adcffad57cfca79dbf64b3889fc2.jpg'>",
		[
			"Ironhack a fait un partenariat avec Picard",
			"Ironhack a fait un partenariat avec Vinted",
			"Ironhack a fait un partenarait avec Digitick",
			"Toutes les réponses sont vraies"
		],
		"Ironhack a fait un partenariat avec Vinted"),

	new Question(
		"Vous connaissez la blague du mec qui a oublié d'augmenter la variable dans sa boucle while ?<br><img height=250px src='https://media.giphy.com/media/yAOjunY81Trjy/giphy.gif'>",
		[
			"Vous connaissez la blague du mec qui a oublié d'augmenter la variable dans sa boucle while ?",
			"Vous connaissez la blague du mec qui a oublié d'augmenter la variable dans sa boucle while ?",
			"Vous connaissez la blague du mec qui a oublié d'augmenter la variable dans sa boucle while ?",
			"break"
		],
		"break")

];

var quiz = new Quiz(questions);

// COOKIE

quiz.writeCookie(0);

//document.getElementById('cook').innerHTML = quiz.score;

fillQuizz();