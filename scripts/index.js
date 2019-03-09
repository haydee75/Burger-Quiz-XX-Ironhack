var vid = document.getElementById("myVideo");
	var counter = 7;
	var intervalId = null;

	function Redirect() {
    window.location = "manches/intros/intro.html";
  }

	function finish() {
  		clearInterval(intervalId);
		Redirect();
	}

	function bip() {
    	counter--;
    	if(counter == 0) finish();
    	else {
    	vid.play();
    	}	
	}

	function start(){
  		intervalId = setInterval(bip, 1000);
	}	