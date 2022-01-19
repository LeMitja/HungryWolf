
    
  
    document.getElementById("sandwich").style.opacity = "1";
    document.getElementById("path").style.opacity = "1";
    document.getElementById("legosiHead").style.opacity = "1";
    var can = document.getElementById("inhale");
     var context = can.getContext("2d");
    
     var lego = new Image();
     lego.src="img/snifspr.png";
     var legohead = document.getElementById("legosiHead");
     var lh = legohead.getContext("2d");
     var shift = 0;
     var frameWidth = 538;
     var frameHeight = 302;
     var totalFrames = 50;
     var currentFrame = 0;

    
    var canvas = document.getElementById('path');
    var c=canvas.getContext('2d');
    var x=295;
    var y=590;
    var legosi = new Image();
	legosi.src="img/legosi.png";
    var interval = setInterval(drawIt, 1);
    function drawIt() {
        c.fillStyle = "purple";
        c.fillRect(x,y,10,10);
        if(x==295&&y>=570)
        y--;
        if(x>=295&&x<=375&&y==570)
        x++;
        if(x==375&&y<=570&&y>=455)
        y--;
        if(y==455&x<=375&&x>=335)
        x--;
        if(x==335&&y<=455&&y>=415)
        y--;//27
        if(y==415&x<=335&&x>=250)
        x--;
        if(x==250&&y<=415&&y>=375)
        y--;
        if(y==375&x<=335&&x>=250)
        x++;
        if(x==335&&y>=295&&y<=375)
        y--;//23
        if(y==295&x<=335&&x>=295)
        x--;
        if(x==295&&y>=295&&y<=335)
        y++;
        if(y==335&x<=295&&x>=217)
        x--;
        if(x==217&&y>=335&&y<=373)
        y++;
        if(y==373&x<=217&&x>=180)
        x--;
        if(x==180&&y<=373&&y>=295)
        y--;
        if(y==295&&x<=255&&x>=180)
        x++;
        if(x==255&&y<=295&&y>=255)
        y--;
        if(y==255&&x<=296&&x>=255)
        x++;
        if(x==295&&y<=255&&y>=218)
        y--;
        if(y==218&&x<=330&&x>=295)
        x++;
        if(x==330&&y<=255&&y>=218)
        y++;
        if(y==255&&x<=410&&x>=320)
        x++;
        if(x==410&&y<=255&&y>=215)
        y--;
        if(y==215&x<=410&&x>=370)
        x--;
        if(x==370&&y<=215&&y>=177)
        y--;
        if(y==177&x<=370&&x>=295)
        x--;
        if(x==295&&y<=177&&y>=138)
        y--;
        if(y==138&x<=295&&x>=60)
        x--;
        if(x==60&&y<=138&&y>=100)
        y--;
        if(y==100&&x<=295&&x>=60)
        x++;
        if(x==295&&y<=100&&y>=0)
        y--;
         if(y==0)
         {
            clearInterval(interval);
            document.getElementById("inhale").style.opacity = "1";
            document.getElementById("path").style.opacity = "0";
            document.getElementById("sandwich").style.opacity = "0";
            setInterval(animate, 65);
         }
        }  
        function animate(){
            
            context.clearRect(0,0, 538, 302);
            
            context.drawImage(lego, shift, 0, frameWidth, frameHeight,
                                30, 20, frameWidth, frameHeight);
            
            shift += frameWidth;
            
                if(currentFrame==totalFrames-20)
                {document.getElementById("inhale").style.opacity = "0";}
                if (currentFrame == totalFrames) {
                    bababooey();
                  }
            
            currentFrame++;
            
            }

        function bababooey(){
            document.getElementById("message").style.opacity = "1";
            document.getElementById("thought").style.opacity = "1";

            typeWriter();
            
        }

        var i = 0;
        var txt = 'Mmmmmm. That smells like an egg sandwich. Today is Wednesday. They taste best on Wednesdays. Better go get some before they run out.';
        var speed = 50;

    function typeWriter() {
    if (i < txt.length) {
    document.getElementById("thought").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else 
  {final();}

}

    function final(){
        document.getElementById("path").style.opacity = "1";
        document.getElementById("thought").style.opacity = "0";
        document.getElementById("message").style.opacity = "0";
        document.getElementById("sandwich").style.opacity = "1";
        y=0;
        x=295;
        setInterval(function lastmaze() {
            c.clearRect(x,y,10,10);
            if(x==295&&y<=100)
            y++;
            if(y==100&&x<=295&&x>=60)
            x--;
            if(x==60&&y<=138&&y>=100)
            y++;
            if(y==138&x<=295&&x>=60)
            x++;
            if(x==295&&y<=177&&y>=138)
            y++;
            if(y==177&x<=370&&x>=295)
            x++;
            if(x==370&&y<=215&&y>=177)
            y++;
            if(y==215&x<=410&&x>=370)
            x++;
            if(x==410&&y<=255&&y>=215)
            y++;
            if(y==255&&x<=410&&x>=330)
            x--;
            if(x==330&&y<=255&&y>=218)
            y--;
            if(y==218&&x<=330&&x>=295)
            x--;
            if(x==295&&y<=255&&y>=218)
            y++;
            if(y==255&&x<=296&&x>=255)
            x--;
            if(x==255&&y<=295&&y>=255)
            y++;
            if(y==295&&x<=255&&x>=180)
            x--;
            if(x==180&&y<=373&&y>=295)
            y++;
            if(y==373&x<=217&&x>=180)
            x++;
            if(x==217&&y>=335&&y<=373)
            y--;
            if(y==335&x<=295&&x>=217)
            x++;
            if(x==295&&y>=295&&y<=335)
            y--;
            if(y==295&x<=335&&x>=295)
            x++;
            if(x==335&&y>=295&&y<=375)
            y++;//23
            if(y==375&x<=335&&x>=250)
            x--;
            if(x==250&&y<=415&&y>=375)
            y++;
            if(y==415&x<=335&&x>=250)
            x++;
            if(x==335&&y<=455&&y>=415)
            y++;//27
            if(y==455&x<=375&&x>=335)
            x++;
            if(x==375&&y<=570&&y>=455)
            y++;
            if(x>=295&&x<=375&&y==570)
            x--;
            if(x==295&&y>=570&&y<=590)
            y++;
            if(y==590&&x==295){
                finalfinal();
            }
          }, 10);


          setInterval(function lastmaze() {
            lh.clearRect(0,0,600,600);
            lh.drawImage(legosi,x-10,y-25,35,35);
            if(x==295&&y<=100)
            y++;
            if(y==100&&x<=295&&x>=60)
            x--;
            if(x==60&&y<=138&&y>=100)
            y++;
            if(y==138&x<=295&&x>=60)
            x++;
            if(x==295&&y<=177&&y>=138)
            y++;
            if(y==177&x<=370&&x>=295)
            x++;
            if(x==370&&y<=215&&y>=177)
            y++;
            if(y==215&x<=410&&x>=370)
            x++;
            if(x==410&&y<=255&&y>=215)
            y++;
            if(y==255&&x<=410&&x>=330)
            x--;
            if(x==330&&y<=255&&y>=218)
            y--;
            if(y==218&&x<=330&&x>=295)
            x--;
            if(x==295&&y<=255&&y>=218)
            y++;
            if(y==255&&x<=296&&x>=255)
            x--;
            if(x==255&&y<=295&&y>=255)
            y++;
            if(y==295&&x<=255&&x>=180)
            x--;
            if(x==180&&y<=373&&y>=295)
            y++;
            if(y==373&x<=217&&x>=180)
            x++;
            if(x==217&&y>=335&&y<=373)
            y--;
            if(y==335&x<=295&&x>=217)
            x++;
            if(x==295&&y>=295&&y<=335)
            y--;
            if(y==295&x<=335&&x>=295)
            x++;
            if(x==335&&y>=295&&y<=375)
            y++;//23
            if(y==375&x<=335&&x>=250)
            x--;
            if(x==250&&y<=415&&y>=375)
            y++;
            if(y==415&x<=335&&x>=250)
            x++;
            if(x==335&&y<=455&&y>=415)
            y++;//27
            if(y==455&x<=375&&x>=335)
            x++;
            if(x==375&&y<=570&&y>=455)
            y++;
            if(x>=295&&x<=375&&y==570)
            x--;
            if(x==295&&y>=570&&y<=590)
            y++;
            if(y==590&&x==295){
                finalfinal();
            }
          }, 10);
          
    }
    function sound(src) {
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
        this.play = function(){
            this.sound.play();
        }
        this.stop = function(){
            this.sound.pause();
        }    
    }
    
    function finalfinal(){
        var mySound;
        mySound = new sound("Sound/eat.mp3");
        document.getElementById("sandwich").style.opacity = "0";
        document.getElementById("start").style.opacity = "1";
        document.getElementById("sandwich").style.opacity = "0";
        document.getElementById("legosiHead").style.opacity = "0";
    document.getElementById("path").style.opacity = "0";
        mySound.play();
    }
