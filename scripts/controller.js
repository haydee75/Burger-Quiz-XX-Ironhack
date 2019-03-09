class Quiz {

    constructor(questions){
      this.questions       = questions;
      this.score           = 0;
      this.questionIndex   = 0;
    }

    getQuestionIndex(){
      return this.questions[this.questionIndex];
    }

    isEnded(){
      return this.questions.length === this.questionIndex;
    }

    guess(answer){

      if(this.getQuestionIndex().correctAnswer(answer)){
      
        this.score++;
        //document.getElementById('cook').innerHTML = this.score;
        document.getElementById("img_score").src = "points/p"+this.score+".jpg";
      }

      this.questionIndex++;

    }

    readCookie(){
      var c = document.cookie.split(';');
      var d = c[0].split('=');
      this.score = d[1];
    }

    writeCookie(valeur){
      document.cookie='score='+valeur+'; expires=Sat, 23 Mar 2019 12:00:00 UTC; path=/';
    }
    
}