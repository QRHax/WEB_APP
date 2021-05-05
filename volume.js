class Volume{
    constructor(){

        this.audio_file = document.getElementById("music");

        var volume = document.getElementById("volume");
        this.audio_file.volume= 50/100;
        
        volume.addEventListener("change",()=>{
         this.audio_file.volume = volume.value / 100 ;
        } );
        
            this.audio_file = document.getElementById("music");
            this.audio_file.playbackRate =1;
    
            var volumeSpeed = document.getElementById("speed");
            speed.addEventListener("change",()=>{
             this.audio_file.playbackRate = volumeSpeed.value / 100;
            });
           
        }
    
    }
     
onload = new Volume();