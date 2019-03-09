var array = [
	'Vrai ou Faux, dans le deuxième module nous allons apprendre comment créer un site avec Wix',
	'Donnez moi une saison commençant par la lettre H',
	'Quel est le prénom de Steve Jobs ?',
	'Comment dit on Ironhack en anglais ?',
	'Vrai ou faux, le PSG est un language de programmation',
	'Que renvoit console.log(\'Hello World\') ?',
	'Vrai ou Faux, dans l\'idée Chuck Norris pourrait faire parti des alumnis d\'Ironhak',
	'Pensez vous qu\'un clavier azerty en vaut 2 ?',
	'Que signifie NaN?',
	'Quelle est la couleur du cheval bleu d\'Ironhak ?'
	];

	var valeurs = [
		  "FAUX",
	  	"HIVER",
	  	"STEVE",
	  	"IRONHACK",
	  	"FAUX",
	  	"HELLO WORLD",
	  	"VRAI",
	  	"OUI",
	  	"NOT A NUMBER",
	  	"BLEU"   	
	];

var compteur = 0;
var score = 0;
var max_question = valeurs.length; 

function petitBurger() {
  var txt;
  
    txt = "<a href='../clappyburger/index.html' target=blank>Petit <strike>burger</strike> jeu de la mort</a>";
  
  document.getElementById("recompense1").innerHTML = txt;
} 

function grandBurger() {
  var txt;
  if (confirm("Vous avez gagné le grand Burger de la mort !")) {
    txt = "<a href='#' target=blank>Grand <strike>burger</strike> jeu de la mort</a>";
  }
  document.getElementById("recompense2").innerHTML = txt;
}     

function next(){

  var reponse = document.getElementById('reponse').value;

  if(reponse.length > 1){

    if(valeurs[compteur] == reponse){
      score++;
      //document.getElementById("img_score").src = "points/p"+score+".jpg";
      if(score == 5){
      	petitBurger();
      	document.getElementById('recompense1').style.display = "block";
      }
      if(score == 10){
      	grandBurger();
      	document.getElementById('recompense2').style.display = "block";
      	document.getElementById('div_reponses').classList.toggle("none");
      	
      }
    }else{

    	 setTimeout(function(){
          alert('Vous avez perdu')
        }, 1000);
    	return;
    }
    
    compteur++;
  
    if(compteur == max_question-1){
      document.getElementById('next').innerHTML = 'Valider';
    }

      if(compteur == max_question){
        document.getElementById("div_reponses").classList.toggle("none");
        //document.getElementById("burger_de_la_mort").style.display = "block";
        setTimeout(function(){
          alert('Vous avez gagné')
        }, 1000);
      }else{
        document.getElementById('question').innerHTML = 'Question '+(compteur+1);
        document.getElementById('reponse').value = '';
      }
      document.getElementById('reponse').focus();
    
  }
}


	function showQuestions(numQuestion){
  		document.getElementById('questionIndex').innerHTML = array[numQuestion];
  
  		if(numQuestion == array.length-1)
  		{
  			document.getElementById("questions").style.display = "none";
  			var d = document.getElementById("div_reponses");
			d.className += " class_reponses";
			d.style.display = "block";

    		return; 
  		}

  		setTimeout(function(){
  			showQuestions(++numQuestion);
  		}, 10000);
	}

	showQuestions(0);

