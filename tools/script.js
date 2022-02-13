// **** script for sticky navigation bar ****

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// ****** vertical tab scripting *****

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
  }

  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();


  // **** scripting of Iframe to be fit in the window properly  ****

  // Selecting the iframe element
  var frame = document.getElementById("Iframe");
                      
  // Adjusting the iframe height onload event
  frame.onload = function()
  // function execute while load the iframe
  {
    // set the height of the iframe as 
    // the height of the iframe content
    frame.style.height = 
    frame.contentWindow.document.body.scrollHeight + 'px';
     

    // set the width of the iframe as the 
    // width of the iframe content
    frame.style.width  = 
    frame.contentWindow.document.body.scrollWidth+'px';
        
  }