function readCookie(){
    var c = document.cookie.split(';');
    var d = c[0].split('=');
    return d[1];
  }

var valeurs = [
{
  question  : 'Un type de courge',
  reponse   : "POTIRON"
},
{
  question  : 'Un sport nautique',
  reponse   : "AVIRON"
},
{
  question  : 'Avec humour et dérision',
  reponse   : "IRONIE"
},
{
  question  : 'Un oiseau migrateur',
  reponse   : "HIRONDELLE"
},
{
  question   : 'Un département du sud-ouest',
  reponse    : "GIRONDE"
},
{
  question   : 'Un super héros',
  reponse    : "IRONMAN"
}
];


function nextStep(){
  location.href = "intros/burger_de_la_mort_intro.html";
}

var compteur = 0;
var score = readCookie();
var max_question = valeurs.length;

function next(){

  var reponse = document.getElementById('reponse').value;

  if(reponse.length > 1){

    if(valeurs[compteur].reponse == reponse){
      score++;
      document.getElementById("img_score").src = "points/p"+score+".jpg";
    }
    
    compteur++;
  
    if(compteur == max_question-1){
      document.getElementById('next').innerHTML = 'Valider';
    }

      if(compteur == max_question){
        document.getElementById("quiz").style.display = "none";
        //document.getElementById("burger_de_la_mort").style.display = "block";
        setTimeout(function(){
          nextStep();
        }, 1000);
      }else{
        document.getElementById('question').innerHTML = valeurs[compteur].question;
        document.getElementById('reponse').value = '';
      }
      document.getElementById('reponse').focus();
    
  }
}


//document.getElementById('cook').innerHTML = tableau.score;
document.getElementById("img_score").src = "points/p"+score+".jpg";