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
		"C的發明者的名字是什麼？<br><img width=250px src='https://media.giphy.com/media/58ETjILcjAp2Pkuqst/giphy.gif' alt=''>",
		[
			"Dennis Ritchie",
			"Bjarne Stroustrup",
			"Brian Kernighan"
		],
		"Bjarne Stroustrup"),

	new Question(
		"组合文本编辑器，编译器和调试器的工具如何？<br><img height=200px src='https://media.giphy.com/media/MPBlyF9bTEwRq/giphy.gif' alt=''>",
		[
			"IDE",
			"IDLE",
			"DSI"
		],
		"IDE"),
	
	new Question(
		"封装规则说什么？<br><img height=200px src='https://media.giphy.com/media/RxR1KghIie2iI/giphy.gif'>",
		[
			"类的所有方法都必须是私有的",
			"类的所有属性都必须是公共的",
			"类的所有元素都必须是私有的"
		],
		"类的所有元素都必须是私有的"),

	new Question(
		"构造函数的作用是什么？<br><img height=200px src='https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif'>",
		[
			"在销毁对象时清理内存",
			"初始化类的属性",
			"声明变量"
		],
		"初始化类的属性"),

	new Question(
		"使用像Qt这样的库来创建窗口有什么好处？<br><img height=200px src='https://media.giphy.com/media/bi6RQ5x3tqoSI/giphy.gif'>",
		[
			"该程序可以在另一个要使用的操作系统下重新编译",
			"我们可以更快地编译",
			"使用像Qt这样的库是没有好处的"
		],
		"该程序可以在另一个要使用的操作系统下重新编译")

];

var quiz = new Quiz(questions);

quiz.readCookie();
//document.getElementById('cook').innerHTML = quiz.score;
document.getElementById("img_score").src = "points/p"+quiz.score+".jpg";
fillQuizz();