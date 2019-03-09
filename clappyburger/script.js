//
var Recording = function(cb){
      var recorder = null;
      var recording = true;
      var audioInput = null;
      var volume = null;
      var audioContext = null;
      var callback = cb;

      navigator.getUserMedia = navigator.getUserMedia    || navigator.webkitGetUserMedia ||
                               navigator.mozGetUserMedia || navigator.msGetUserMedia;

      if(navigator.getUserMedia){
        navigator.getUserMedia({audio:true},
          function(e){ //success
            var AudioContext = window.AudioContext || window.webkitAudioContext;
            audioContext = new AudioContext();
            volume = audioContext.createGain(); // creates a gain node
            audioInput = audioContext.createMediaStreamSource(e); // creates an audio node from the mic stream
            audioInput.connect(volume);// connect the stream to the gain node
            recorder = audioContext.createScriptProcessor(2048, 1, 1);

            recorder.onaudioprocess = function(e){
                if(!recording) return;
                var left = e.inputBuffer.getChannelData(0);
                //var right = e.inputBuffer.getChannelData(1);
                callback(new Float32Array(left));
            };
            volume.connect(recorder);// connect the recorder
            recorder.connect(audioContext.destination);
          },
          function(e){ //failure
            alert('Error capturing audio.');
          }
        );
      } else {
        alert('getUserMedia not supported in this browser.');
      }
    };

    var lastClap = (new Date()).getTime();

    function detectClap(data){
      var t = (new Date()).getTime();
      if(t - lastClap < 200) return false;
      var zeroCrossings = 0, highAmp = 0;
      for(var i = 1; i < data.length; i++){
        if(Math.abs(data[i]) > 0.25) highAmp++;
        if(data[i] > 0 && data[i-1] < 0 || data[i] < 0 && data[i-1] > 0) zeroCrossings++;
      }
      if(highAmp > 20 && zeroCrossings > 30){
        
        lastClap = t;
        return true;
      }
      return false;
    }

//canvas
var canvas = document.getElementById('c')
var ctx = canvas.getContext('2d')
//variables

var soundStar = document.createElement("audio")
soundStar.src="http://66.90.93.122/ost/mario-kart-64/fyocpkkg/02%20Setup%20and%20Kart%20Select.mp3"
var soundInicio =document.createElement("audio")
soundInicio.src="http://66.90.93.122/ost/mario-kart-64/pgpwymbj/25%20Starting%20Race%203.mp3"
var soundDie = document.createElement('audio')
soundDie.src="http://66.90.93.122/ost/mario-bros/leyqroln/09%20mb%20game%20over.mp3"

var interval;

var frames = 0
var images = {
    bg: "images/bg.jpg",
    flappy: "images/quiz.png",
    logo: "images/logo.jpg",
    obstacle_bottom: "images/obs_bottom.png",
    obstacle_top: "images/obs_top.png"
}
var pipes = []
//clases
function Board(){
    this.x = 0
    this.y = 0
    this.width = canvas.width
    this.height = canvas.height
    this.image = new Image()
    this.image.src = images.bg
    //this.image.onload = ()=>this.draw()
    this.draw = function(){
        this.x--
        if(this.x < -this.width) this.x = 0
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
        ctx.drawImage(this.image,this.x + this.width,this.y,this.width,this.height)
    }

this.drawScore = function(){
        ctx.font = "bold 24px Avenir"
        ctx.fillText("Score: " + Math.floor(frames/60), 50,50)
    }
}

function Flappy(){
    Board.call(this)
    this.x = 100
    this.y = 200
    this.width = 40
    this.height = 30
    this.image.src = images.flappy
    //this.image.onload = ()=>this.draw()
    this.draw = function(){
        this.boundaries()
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
    }
    this.boundaries = function(){
        if(this.y+this.height > canvas.height-10) {
            this.y = canvas.height-this.height
        }
        else if(this.y < 10 ) {
            this.y = 10
        }
        else this.y+=2.01

    }

    this.isTouching = function(item){
        return (this.x < item.x + item.width) &&
        (this.x + this.width > item.x) &&
        (this.y < item.y + item.height) &&
        (this.y + this.height > item.y);
    }

} //flappy
//pipe
function Pipe(height,y, position){
    this.x = canvas.width + 60
    this.y = y || 0
    this.width = 60
    this.height = height
    this.image = new Image()
    this.image.src = position === "top" ? images.obstacle_top : images.obstacle_bottom
    this.draw = function(){
        this.x-=2
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height) 
    }
}

//instances
var bg = new Board()
var flappy = new Flappy()
var pipe = new Pipe()
var s=0


//main functions
function start(){
    //soundInicio.play()
    pipes = []
    frames = 0
    flappy = new Flappy()
    if(!interval) interval = setInterval(update,1000/60)



}
function update(){
    frames++
    s++
    // if(s===9) {

    //     //soundStar.play()
    // }

    ctx.clearRect(0,0,canvas.width, canvas.height)
    bg.draw()
    flappy.draw()
    drawPipes()
    bg.drawScore()
    checkFlappyCollition()
}

function gameOver(){
    clearInterval(interval)
    interval = null
    ctx.fillStyle = "white"
    ctx.font = "bold 80px Arial"
    ctx.fillText("GAME OVER", 170,200)
    ctx.fillStyle = "#F29B43"
    ctx.font = "bold 40px Arial"
    ctx.fillText("Score: " + Math.floor(frames/60), 340,300)
    ctx.font = "bold 20px Arial"
    ctx.fillText("PRESS ENTER TO RESTART", 280,350)
}

function drawCover(){
    var img = new Image()
    img.src = images.logo
    img.onload = function(){
        bg.draw()
        ctx.drawImage(img, 250,100,300,100)
        ctx.fillStyle = "white"
        ctx.font = "bold 30px Avenir"
        ctx.fillText("READY TO CLAP YOUR HANDS ?", 160,270)
        ctx.fillStyle = "white"
        ctx.font = "bold 25px Avenir"
        ctx.fillText("PRESS ENTER", 310,320)
    }
}

function generatePipes(){
    if(frames%150===0) {
        var height = Math.floor(Math.random()*200 + 50)
        pipes.push(new Pipe(height,0, "top"))
        var h = canvas.height-height-200
        var y = canvas.height - h
        pipes.push(new Pipe(h,y))
    }

}

function drawPipes(){
    generatePipes()
    pipes.forEach(function(pipe){
        pipe.draw()
    })
}

function checkFlappyCollition(){
    for(var pipe of pipes){
        if(flappy.isTouching(pipe)){
             gameOver(); //, soundDie.play()
        }
    }
}

//listeners
addEventListener('keyup',function(e){
    switch(e.keyCode){
        case 13:
            return start() 
        default:
            return
    }
} )

addEventListener('keydown',function(e){
    switch(e.keyCode){
        case 32:
            flappy.y -=40
            return
        default:
            return
    }
} )

var rec = new Recording(function(data){
      if(detectClap(data)){
        //console.log('clap!');
        flappy.y -=40
        document.bgColor = 'rgb('+Math.random()*255+','+Math.random()*255+','+Math.random()*255+')';
      }
    });

drawCover() ;