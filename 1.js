window.onload = function(){
    const changeImage = document.querySelector(".change_img");
    let state = false;
    const audioBtn1 = document.querySelector(".audio_btn1");
    const audio1 = document.querySelector(".audio1");
    const audioBtn2 = document.querySelector(".audio_btn2");
    const audio2 = document.querySelector(".audio2");
    const audioBtn3 = document.querySelector(".audio_btn3");
    const audio3 = document.querySelector(".audio3");
    const vol = document.querySelector(".volume");
    const musicProgress = document.querySelector(".music_progress");

    vol.oninput = function(){
        if(audioBtn1.innerText == "재생중지"){
            audio1.volume = vol.value / 100;
        }else if(audioBtn2.innerText == "재생중지"){
            audio2.volume = vol.value / 100;
        }else{
            audio3.volume = vol.value / 100;
        }
    };

    audioBtn1.onclick = function(){
        if(audioBtn1.innerText == "Romantic Weapon"){
            audio1.play();
            audioBtn1.innerText = "재생중지";
            audio2.pause();
            audio3.pause();
            audioBtn2.innerText = "Nostalgia";
            audioBtn3.innerText = "Nia Village";
            audio2.currentTime = 0;
            audio3.currentTime = 0;
            changeImage.src = "images/6.jpg";
        }else{
            audio1.pause();
            audioBtn1.innerText = "Romantic Weapon";
            audio1.currentTime = 0;
            changeImage.src = "images/6.jpg";
        }
    }
    audioBtn2.onclick = function(){
        if(audioBtn2.innerText == "Nostalgia"){
            audio2.play();
            audioBtn2.innerText = "재생중지";
            audio1.pause();
            audio3.pause();
            audioBtn1.innerText = "Romantic Weapon";
            audioBtn3.innerText = "Nia Village";
            audio1.currentTime = 0;
            audio3.currentTime = 0;
            changeImage.src = "images/7.jpg";
        }else{
            audio2.pause();
            audioBtn2.innerText = "Nostalgia";
            audio2.currentTime = 0;
            changeImage.src = "images/7.jpg";
        }
    }
    audioBtn3.onclick = function(){
        if(audioBtn3.innerText == "Nia Village"){
            audio3.play();
            audioBtn3.innerText = "재생중지";
            audio1.pause();
            audio2.pause();
            audioBtn1.innerText = "Romantic Weapon";
            audioBtn2.innerText = "Nostalgia";
            audio1.currentTime = 0;
            audio2.currentTime = 0;
            changeImage.src = "images/8.jpg";
        }else{
            audio3.pause();
            audioBtn3.innerText = "Nia Village";
            audio3.currentTime = 0;
            changeImage.src = "images/8.jpg";
        }
    }
    audio1.onended = function(){
        audioBtn1.innerText = "Romantic Weapon"
    }
    audio2.onended = function(){
        audioBtn2.innerText = "Nostalgia"
    }
    audio3.onended = function(){
        audioBtn3.innerText = "Nia Village"
    }
}
