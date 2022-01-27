//Left Navlist Button function

document.getElementById("menuButton").addEventListener("click", open);
    function open(){
        document.getElementById("navList").style.display ="flex";
    } 
document.getElementById("XButton").addEventListener("click", close);
    function close(){
        document.getElementById("navList").style.display ="none";
    }

// Scroll To Top Button function 

let clacScrollValue = () => {
    let ScrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let clacScrollValue = Math.round((pos * 100)/calcHeight);
    
    if(pos>100){
        ScrollProgress.style.display = "grid";
    }
    else{
        ScrollProgress.style.display = "none"
    }
    ScrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    ScrollProgress.style.background = `conic-gradient(#818286 ${clacScrollValue}%, #81828681 ${clacScrollValue}%)`;
};

window.onscroll = clacScrollValue;
window.onload = clacScrollValue;