function showText(obj)
    {
    var inner = obj.parentNode.getElementsByTagName("div")[0];
    if (inner.style.display == "none")
        inner.style.display = "";
    else
        inner.style.display = "none";
    }

//index page DOM manipulation logo button
function off() {
  document.getElementById('logo-dom').style.display='none';
}

function on() {
  document.getElementById('logo-dom').style.display='block';
}
//END


//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// ABOUT page

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
//END

// DOM manipulation
//change images
	function getHand1() {
		document.getElementById('hands').src="about-images/hands2.jpg";
	}

  function getHand2() {
		document.getElementById('hands').src="about-images/hands1.jpg";
	}
//END ABOUT PAGE

//CONTACT PAGE
//DOM manipulation
//change html font colors
function changeHeading() {
		document.getElementById("text").innerHTML="Helping one person might not change the world but it could change the world for one person. Thank you for your help!";
	}
  //end

// FORM Validation
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
//end
//END CONTACT PAGE


/* SIGN UP - REGISTER PAGE */
(function() {
    'use strict';
    window.addEventListener('load', function() {
      var form = document.getElementById('needs-validation');
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    }, false);
  })();
/* END OF SIGN UP - REGISTER PAGE */
