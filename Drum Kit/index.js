const btns = document.querySelectorAll(".drum");

btns.forEach(function (btn) {
    btn.addEventListener("click", function() {
        const buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
})

document.addEventListener("keypress", function(event) {
    playSound(event.key);
    buttonAnimation(event.key);
})

function playSound(key) {
    switch (key) {
        case "w":
            const tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a": 
            const tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":   
            const tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":    
            const tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;                           
        case "j":   
            const snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;     
        case "k": 
            const kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;     
        case "l":      
            const crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;                                            
        default:
            console.log(key);
            break;
    }
}

function buttonAnimation(currentKey) {
    const activeBtn = document.querySelector("." + currentKey);
    activeBtn.classList.add("pressed");
    setTimeout(function() {
        activeBtn.classList.remove("pressed");
    }, 100)
}

/**
 *  another method add event listener for all the drum buttons
 */
// for (let index = 0; index < btns.length; index++) {
//     btns[index].addEventListener("click", function() {
//         alert("I got clicked..");
//     })
// }