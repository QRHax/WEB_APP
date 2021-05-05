class Player{
    constructor(){
        var HeightMain = document.getElementById("player");
        HeightMain.style.height = screen.height+"px";
        if(screen.width < 620){
           
            HeightMain.style.width = screen.width+"px";
        }
        var HeightDiv = document.getElementById("contact");
        HeightDiv.style.height = screen.height-300+"px";
    }
   

}
onload= new Player();


class Audio_player{
    constructor(){
        this.music = document.getElementById("music");
        this.play_pause_file = document.getElementById("play");
        this.title_audio = document.getElementById("title_audio");
        this.next_button=document.getElementById("next");
        this.is_played;
        this.play_pause_file.addEventListener("click",()=>{
            this.audioplay();
        });
        this.NameSource = [];
        this.NameSource [0]= "Alone";
        this.NameSource [1]= "Unity";
        this.NameSource [2]= "Dark Side";
        
        
        this.source = [];
        this.source [0]= "alon.mp3";
        this.source [1]= "unity.mp3";
        this.source [2]= "dark side.mp3";
      
        this.server = 0;
        this.setoudio();
        document.getElementById("next").addEventListener("click",()=>{
            if(this.server<this.source.length-1){

                ++this.server;
                this.is_played=false
            }else{
                this.server=0;
            }
            this.setoudio();
            this.audioplay();
        })
        document.getElementById("back").addEventListener("click",()=>{
            if(this.server>this.source.length-1){

                --this.server;
                this.is_played=false;
            }else{
                this.server=this.source.length-1;
            }
            
            this.setoudio();
            this.audioplay();
        })
    }
    setoudio(){
        this.music.src=this.source[this.server];
        this.title_audio.innerHTML=this.NameSource[this.server];
    }

    audioplay(){
        if(this.is_played==false){
            this.play_pause_file.src="pause.png";
            this.music.play();
            this.is_played = true;
        }else{
            this.is_played = false;
            this.music.pause();
            this.play_pause_file.src="play.png";

        }
    }
   
}
onload = new Audio_player();