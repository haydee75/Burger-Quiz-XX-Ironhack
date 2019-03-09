function Quiz(questions) {

    this.score   		    = 0;
    this.questions 		  = questions;
    this.questionIndex 	= 0;

}

Quiz.prototype.getQuestionIndex = function(){

  	return this.questions[this.questionIndex];

}

Quiz.prototype.isEnded = function(){

  	return this.questions.length === this.questionIndex;
  	
}

Quiz.prototype.guess = function(answer){

  	if(this.getQuestionIndex().correctAnswer(answer)){
  		
  		this.score++;
        //document.getElementById('cook').innerHTML = this.score;
        document.getElementById("img_score").src = "points/p"+this.score+".jpg";
  	}

    this.questionIndex++;
}

Quiz.prototype.readCookie = function(){
  var c = document.cookie.split(';');
  var d = c[0].split('=');
  this.score = d[1];
}

Quiz.prototype.writeCookie = function(valeur){
  document.cookie='score='+valeur+'; expires=Sat, 23 Mar 2019 12:00:00 UTC; path=/';
  
}