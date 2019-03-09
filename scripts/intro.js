var option1 = "<a class='link' href='https://www.youtube.com/watch?v=7rKHnEc1nMM' target='blank'>Je regarde ce tutoriel très chiant de 10 minutes réalisé par Erwann de la chaîne youtube Génération jouet</a>";

var option2 = "<a class='link' href='https://www.youtube.com/watch?v=mIUwEoG7ssM' target='blank'>Je regarde un extrait de l'émission TV dont est tiré le Burger Quiz</a>"

var option3 = "<a class='game' href='nuggets_intro.html'>Je connais déjà les règles</a>"

var story = "BIENVENUE DANS CETTE ÉDITION SPÉCIALE DU BURGER QUIZ VERSUS IRONHACK<br><br>Une édition où vous allez pouvoir tester vos connaissances sur Ironhack tout en rigolant !<br><br>Mais d'abord, est ce bien la peine de présenter le Burger Quizz ?<br><br>Si tu ne connais pas encore ce jeu alors j'ai deux options pour toi :<br><br>";

var counter = 0;

var txt_story = document.getElementById("txt_story");

var options = document.getElementById("options");



var counterID = setInterval( doTypewriter, 50  );

function doTypewriter( ){
		
	var str = story.substr(0, counter);

	txt_story.innerHTML = str;


	
	counter++;
	
	if ( counter >=  story.length ) {
		clearInterval( counterID );
		options.innerHTML = option1+ "<br>" +option2+ "<br>"+option3;
	}

}