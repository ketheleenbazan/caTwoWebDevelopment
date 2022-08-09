//index page
//gallery of IMAGES
//show text when click on the image
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
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// ABOUT page
// DOM manipulation
//change images
	function getHand1() {
		document.getElementById('hands').src="about-images/hands2.jpg";
	}

  function getHand2() {
		document.getElementById('hands').src="about-images/hands1.jpg";
	}
//END ABOUT PAGE

/* CONTACT PAGE */
//DOM manipulation
function changeHeading() {
		document.getElementById("text").innerHTML="Helping one person might not change the world but it could change the world for one person. Thank you for your help!";
	}
  //end

// FORM Validation
//GOT EXTERNAL REFERENCES
/* java validation on the forms from bootstrap */
(function() {
  'use strict';
  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('check-validation');
    // Loop
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });}, false);})();
//end
//END CONTACT PAGE


/* SIGN UP - REGISTER PAGE */
/* java validation on the forms from bootstrap */
(function() {
    'use strict';
    window.addEventListener('load', function() {
      var form = document.getElementById('must-validate');
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    }, false);})();
/* END OF SIGN UP - REGISTER PAGE */
