$(document).ready(function() {
    // Popup functionality
    $("#MyDscroll").hide();
  
    function openForm() {
      // Use jQuery to toggle the visibility of the form
      $("#MyDscroll").show();
    }
  
    // Call openForm after 5000 milliseconds (5 seconds)
    var timerID = setTimeout(openForm, 5000);
  
    // Event handler for form submission
    $("#signupbabe").on("submit", function(event) {
      // Prevent the default form submission
      event.preventDefault();
  
      // Get the value of the first name input
      var firstName = $('#fname').val();
  
      // Hide the form
      $("#MyDscroll").hide();
  
      // Replace the content of the formoutput element with the welcome message
      $("#formoutput").html(" Welcome: " + firstName);
  
      // Clear the previously set timeout
      clearTimeout(timerID);
    });
    
    // Function for redirection using location.replace
    function myReplace() {
      var elOutput = document.getElementById("butt1");
      location.replace(elOutput.href);
    }
  
    // Assign the function myReplace to the onclick property of the element with id "topoff1"
    document.getElementById("topoff1").onclick = function() {
      myReplace();
    };
  
    // Function for redirection to a specific URL
    function redirectw3() {
      window.location.href = "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_redirect_webpage";
    }
  
    // Assign the function redirectw3 to the onclick property of the element with id "butt1"
    document.getElementById("butt1").onclick = function() {
      redirectw3();
    };
  });
  
  
