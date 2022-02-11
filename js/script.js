
    document.getElementById("snadvich").style.opacity = "1";
    document.getElementById("path").style.opacity = "1";
    document.getElementById("legosiHead").style.opacity = "1";
    var can = document.getElementById("inhale");
     var context = can.getContext("2d");
    
     var lego = new Image();
     lego.src="img/snifspr.png";
     var smok = new Image();
     smok.src="img/smoke.png";
     var legohead = document.getElementById("legosiHead");
     var lh = legohead.getContext("2d");
     var shift = 0;
     var frameWidth = 538;
     var frameHeight = 302;
     var totalFrames = 50;
     var currentFrame = 0;
      
    var canvas = document.getElementById('path');
    var c=canvas.getContext('2d');
    const x=[295, 375, 375, 335, 335, 250, 250, 335, 335, 295, 295, 217, 217, 180, 180, 255, 255, 296, 296, 330, 330, 410, 410, 370, 370, 295, 295, 60, 60, 295, 295];
    const y=[570, 570, 455, 455, 415, 415, 375, 375, 295, 295, 335, 335, 373, 373, 295, 295, 255, 255, 218, 218, 255, 255, 215, 215, 177, 177, 138, 138, 100, 100, 0];
    var xnew; var xnow=295;
    var ynew; var ynow=590;
    var i=0;
    var b=x.length-1;
    var k=x.length-1;
    var legosi = new Image();
	legosi.src="img/legosi.png";
    drawIt();
    async function drawIt() {
        while (i<x.length)
        {
            xnew=x[i];
            ynew=y[i];
            
            if (xnew!=xnow)
            {
            
                while (xnow<xnew)
                {
                    c.clearRect(0,0,600,600);
                    c.drawImage(smok, xnow-10, ynow-25, 35,35);
                    
                    xnow++;
                    await sleep(5);
                }
                c.drawImage(smok, xnow, ynow, 35,35);
                while (xnow>xnew)
                {
                    c.clearRect(0,0,600,600);
                    c.drawImage(smok, xnow-10, ynow-25, 35,35);
                   
                    xnow--;
                    await sleep(5);
                }
                
            }
            else if (ynew!=ynow)
            {
            
                while (ynow<ynew)
                {
                    c.clearRect(0,0,600,600);
                    c.drawImage(smok, xnow-10, ynow-25, 35,35);
                    
                    ynow++;
                    await sleep(5);
                    
                }
                while (ynow>ynew)
                {
                    c.clearRect(0,0,600,600);
                    c.drawImage(smok, xnow-10, ynow-25, 35,35);
                    
                    ynow--;
                    await sleep(5);
                } 
                
            }
            i++;
    }
            c.clearRect(0,0,600,600);
            document.getElementById("inhale").style.opacity = "1";
            document.getElementById("path").style.opacity = "0";
            document.getElementById("snadvich").style.opacity = "0";
            document.getElementById("door").style.opacity = "0";
            document.getElementById("maze").style.opacity = "0";
            setInterval(animate, 65);
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

        var s = 0;
        var txt = 'Mmmmmm. That smells like an egg sandwich. Today is Wednesday. They taste best on Wednesdays. Better go get some before they run out.';
        var speed = 50;

    function typeWriter() {
    if (s < txt.length) {
    document.getElementById("thought").innerHTML += txt.charAt(s);
    s++;
    setTimeout(typeWriter, speed);
  }
  else 
  {final();}

}

    async function final(){
        document.getElementById("path").style.opacity = "1";
        document.getElementById("thought").style.display = "none";
        document.getElementById("message").style.display = "none";
        document.getElementById("snadvich").style.opacity = "1";
        document.getElementById("door").style.opacity = "1";
        document.getElementById("maze").style.opacity = "1";
            lh.clearRect(0,0,600,600);
            lh.drawImage(legosi,295,0,35,35);
            while (k>-1)
        {
            xnew=x[k];
            ynew=y[k];
            
           if (xnew!=xnow)
            {
            
                while (xnow<xnew)
                {
                    lh.clearRect(0,0,600,600);
                    lh.drawImage(legosi,xnow-10,ynow-25,35,35);
                    xnow++;
                    await sleep(5);
                }
                while (xnow>xnew)
                {
                    lh.clearRect(0,0,600,600);
                    lh.drawImage(legosi,xnow-10,ynow-25,35,35);
                    xnow--;
                    await sleep(5);
                }
                
            }
            else if(ynew!=ynow)
            {
            
                while (ynow<ynew)
                {
                    lh.clearRect(0,0,600,600);
                    lh.drawImage(legosi,xnow-10,ynow-25,35,35);
                    ynow++;
                    await sleep(5);
                }
                while (ynow>ynew)
                {
                    lh.clearRect(0,0,600,600);
                    lh.drawImage(legosi,xnow-10,ynow-25,35,35);
                    ynow--;
                    await sleep(5);
                } 
                
            }
            k--;
        }
            finalfinal();
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
        document.getElementById("snadvich").style.display = "none";
        document.getElementById("start").style.display = "inline-block";
        document.getElementById("legosiHead").style.display = "none";
        document.getElementById("door").style.display = "none";
        document.getElementById("maze").style.display = "none";
        document.getElementById("path").style.display = "none";
        document.getElementById("inhale").style.display = "none";
        mySound.play();
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }