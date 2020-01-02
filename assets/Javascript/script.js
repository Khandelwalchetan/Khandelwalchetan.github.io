window.addEventListener("load",initEvents);
var ul;
var audio;
var slider;
var span;
var songtext;
var play;
var pause;
function initEvents(){
    ul=document.getElementById("songslist");
    audio=document.getElementById("audio");
    slider=document.getElementById("slider");
    span=document.getElementById("songCovered");
    
    for(i=0; i<songsArray.length;i++){
         var li =document.createElement("li");
         var songimage=document.createElement("img");
         songimage.setAttribute('src',songsArray[i].songImage);
         songtext=document.createElement("span");
         songtext.innerHTML=songsArray[i].songName;
         var plus=document.createElement("i");
         plus.className='fas fa-plus';
         
         
         li.appendChild(songimage);
         li.appendChild(songtext);
         li.appendChild(plus);
        
         ul.appendChild(li);
         songtext.addEventListener("click",playSong);
         play=document.getElementById("play");
         pause=document.getElementById("pause");
         play.addEventListener("click", startsong);
         pause.addEventListener("click",pausesong);
         slider.addEventListener("change",seeksong);
         plus.addEventListener("click",addtoplaylist);

         
    
         

    }
}
function playSong(){
    
    var songName=event.srcElement.innerHTML;
    var songurl;
    var songcoverimg;

    for(var i=0;i<songsArray.length;i++){
        if(songsArray[i].songName==songName){
            songurl=songsArray[i].songUrl;
            songcoverimg=songsArray[i].songImage;
        
        }
    }
    changecover(songcoverimg);
    
    audio.src=songurl;
    audio.play();
    setInterval(function(){
        slider.value = audio.currentTime;
        // console.log(audio.currentTime);
        span.style.width = (slider.value / 3)+'%';
        
    }, 500);
    setTimeout(function(){
        var duration = audio.duration;
        slider.max = duration;
    },500);



}
function changecover(bowl){
    var img=document.getElementById("bowl");
    img.setAttribute('src',bowl);
}
function startsong(){
    audio.play();

}
function pausesong(){
    audio.pause();
}
function seeksong(){
    audio.currentTime=slider.value;
}
function addtoplaylist(){


    var addsong=event.srcElement.parentElement.childNodes[1].innerHTML;
    console.log(addsong);
    var nul=document.getElementById("my");
    songsArray.forEach(function(obj){
        if(obj.songName==addsong){
            var nli=document.createElement("li");
            var text=document.createElement("span");
            var minus=document.createElement("i");
            
            minus.className="fas fa-minus";
            text.innerHTML=obj.songName;
            var img=document.createElement("img");
            img.setAttribute('src',obj.songImage);
            nli.appendChild(img);
            nli.appendChild(text);
            nli.appendChild(minus);
            nul.appendChild(nli);
            minus.addEventListener("click",deletefromplaylist);
            






        }
    })
}
function deletefromplaylist(){
    event.srcElement.parentElement.style.display='none';
}
        
    
