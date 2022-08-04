
//This function checks if the "animate" CSS has ran, if so, it is reset so it can run again.

    function jump(){
    if (man.classList == "animate") {return}
          man.classList.add("animate");
          setTimeout(function(){
        man.classList.remove("animate");
        },250);
      }

    var endGame = setInterval(function() {
    let manPos = parseInt(window.getComputedStyle(man).getPropertyValue("top"));
    let blockPos = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockPos<15 && blockPos>-10 && manPos>=100){
      block.style.animation = "none";
      block.style.display = "none";
      man.style.display = "none";
      button1.style.display = "none";
      document.getElementById("over").innerHTML = "Game over!";
      over.style.display = "block";
      //document.write("Game Over!");
    }
}, 1);
