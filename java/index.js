document.getElementById("btn1").onclick = ()=>{
    document.getElementById("keyOne").style.display = "block";
};

function cancelOne(){
    document.getElementById("returnOne").onclick = ()=>{
        document.getElementById("keyOne").style.display = "none";
    };
};
document.getElementById("btn2").onclick = ()=>{
    document.getElementById("keyTwo").style.display = "block";
    // console.log("w")
};

function cancelTwo(){
    document.getElementById("returnTwo").onclick = ()=>{
        document.getElementById("keyTwo").style.display = "none";
    };
}

let ch1 = document.getElementById("ch1");
let ch2 = document.getElementById("ch2");

let count = 50;
window.onkeydown = function () {
    console.log(event.key);
    if (event.key == "d" || event.key == "D") {
        count = count + 50;
        ch1.style.marginLeft = count + "px";
        console.log(ch1)
    }
    if (event.key == "a" || event.key == "A") {
        count = count - 50;
        ch1.style.marginLeft = count + "px";
        console.log(ch1)
    }
    if (event.key == "ArrowLeft") {
        count = count + 50;
        ch2.style.marginRight = count + "px";
        console.log(ch2)
    }
    if (event.key == "ArrowRight") {
        count = count - 50;
        ch2.style.marginRight = count + "px";
        console.log(ch2)
    }
    if (event.key == "z" || event.key == "Z") {
        ch1.src = "../css/images/ch 1/kick.gif";
        setTimeout(function () {
            ch1.src = "../css/images/ch 1/main.gif";
        }, 2000)
    }
    if (event.key == "s" || event.key == "S") {
        ch1.src = "../css/images/ch 1/sit.gif";
        setTimeout(function () {
            ch1.src = "../css/images/ch 1/main.gif";
        }, 2000)
    }
    if (event.key == "w" || event.key == "W") {
        ch1.src = "../css/images/ch 1/power.gif";
        setTimeout(function () {
            ch1.src = "../css/images/ch 1/main.gif";
        }, 1000)
    }
    if (event.key == "e" || event.key == "E") {
        ch1.src = "../css/images/ch 1/emote.gif";
        setTimeout(function () {
            ch1.src = "../css/images/ch 1/main.gif";
        }, 1000)
    }

    if (event.key == "ArrowUp") {
        ch2.src = "../css/images/ch 2/power.gif";
        // ch2.className = "all";
        setTimeout(function () {
            ch2.src = "../css/images/ch 2/main.gif";
        }, 1000)
    }
    if (event.key == "Control") {
        ch2.src = "../css/images/ch 2/emote.gif";
        setTimeout(function () {
            ch2.src = "../css/images/ch 2/main.gif";
        }, 1000)
    }
    if (event.key == "ArrowDown") {
        ch2.src = "../css/images/ch 2/sit.gif";
        setTimeout(function () {
            ch2.src = "../css/images/ch 2/main.gif";
        }, 2000)
    }
    if (event.key == " ") {
        ch2.src = "../css/images/ch 2/kick.gif";
        setTimeout(function () {
            ch2.src = "../css/images/ch 2/main.gif";
        }, 2000)
    }



















}