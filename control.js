$(document).ready(function () {
  // Popup functionality
  $("#MyDscroll").hide();

  function openForm() {
    // Use jQuery to toggle the visibility of the form
    $("#MyDscroll").show();

    // Include fingerprintjs2 library
    var fingerprint;

    new Fingerprint2().get(function (result, components) {
      fingerprint = result; // store the fingerprint for later use
    });

    // Store users' info as an array of objects
    const users = [];

    // Event handler for form submission
    $("#signupbabe").on("submit", function (event) {
      // Prevent the default form submission
      event.preventDefault();

      // Get the values of form elements
      var firstName = $("#fname").val();
      var email = $("#iemail").val();
      var password = $("#mpassword").val();

      // Check if the entered email and password match any user in the array
      var userExists = users.some(function (user) {
        return user.email === email && user.password === password;
      });

      // Check if user already signed up based on fingerprint
      var fingerprintExists = users.some(function (user) {
        return user.fingerprint === fingerprint;
      });

      if (userExists || fingerprintExists) {
        // Display an error message
        $("#iDO").html("Error: You already have an account");
      } else {
        // Add user info to the users array
        users.push({
          id: Date.now().toString(),
          name: firstName,
          email: email,
          password: password,
          fingerprint: fingerprint,
        });

        // Hide the form
        $("#MyDscroll").hide();

        // Replace the content of the formoutput element with the welcome message
        $("#formoutput").html("Welcome: " + firstName);
      }
    });
  }

  // Call openForm after 5000 milliseconds (5 seconds)
  var timerID = setTimeout(openForm, 5000);


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

