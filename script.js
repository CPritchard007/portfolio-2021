

let h1 = "100px";

window.onscroll = function () {
    if (screen.width < 800) {
        console.log("too small")
        return
    }
    let scrollTop = document.body.scrollTop;
    let elmScrollTop = document.documentElement.scrollTop;
    // console.log(scrollTop + " - " + elmScrollTop)
    
    if (scrollTop > 150 || elmScrollTop > 150) {
        document.querySelector(".stuffer").style.maxHeight = "0"
        document.querySelector("h1").style.fontSize = "30px";
        document.querySelector("header h1 ~ div div").style.maxHeight = "0";
        document.querySelectorAll("header h1 ~ div div").forEach( elm => {
            elm.style.maxHeight = "0"; 
            elm.style.position = "absolute";
    
    });

    
    } else {
        
        document.querySelector('.stuffer').style.maxHeight = "calc(100vh / 3 - " + h1
        document.querySelector("h1").style.fontSize = "100px"
        document.querySelectorAll("header h1 ~ div div").forEach( elm => {
           elm.style.maxHeight = "60px"; 
           elm.style.position = "relative";
        });

    }
}