var textOverImages = document.getElementsByClassName("onClickTextOverImage");
var previousTextOverImage;
for (var i = 0; i < textOverImages.length; i++) {
  textOverImages[i].onclick = function() {
    var classes = this.classList;
    if (classes.contains("show")) {
      classes.remove("show");
    } else {
      if (previousTextOverImage != null)
        previousTextOverImage.classList.remove("show");
      previousTextOverImage = this;
      classes.add("show");
    }
  }
}

function stopPropagation(event){
  event.stopPropagation();
}

var textOverImages2 = document.getElementsByClassName("onClickTextOverImage2");
var previousTextOverImage2;
for (var i = 0; i < textOverImages2.length; i++) {
  textOverImages2[i].onclick = function() {
    var classes = this.classList;
    if (classes.contains("show")) {
      classes.remove("show");
    } else {
      if (previousTextOverImage2 != null)
        previousTextOverImage2.classList.remove("show");
      previousTextOverImage2 = this;
      classes.add("show");
    }
  }
}

function stopPropagation(event){
  event.stopPropagation();
}


var textOverImages3 = document.getElementsByClassName("onClickTextOverImage3");
var previousTextOverImage3;
for (var i = 0; i < textOverImages3.length; i++) {
  textOverImages3[i].onclick = function() {
    var classes = this.classList;
    if (classes.contains("show")) {
      classes.remove("show");
    } else {
      if (previousTextOverImage3 != null)
        previousTextOverImage3.classList.remove("show");
      previousTextOverImage3 = this;
      classes.add("show");
    }
  }
}

function stopPropagation(event){
  event.stopPropagation();
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
