$(document).ready(function () {

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCI_AEg_j0cmkfzzEZ-SD6PxvCv88N-ZwQ",
    authDomain: "kitchens-2b144.firebaseapp.com",
    databaseURL: "https://kitchens-2b144-default-rtdb.firebaseio.com",
    projectId: "kitchens-2b144",
    storageBucket: "kitchens-2b144.appspot.com",
    messagingSenderId: "757474307640",
    appId: "1:757474307640:web:957ee5e46bb6faf89040cd"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Initialize variables
  const auth = firebase.auth();
  const database = firebase.database();

  // Set up register function
  function register(fullname, email, password) {
    auth.createUserWithEmailAndPassword(email, password)
      .then(function () {
        var user = auth.currentUser;

        //add users to firebase database
        var database_ref = database.ref();

        // Add this user to Firebase database
        var user_data = { 
          email: email,
          fullname: fullname,
          last_login: Date.now()
        };
        database_ref.child('users/' + user.uid).set(user_data);
      })
      .catch(function (error) {
        alert("Error creating user: " + error.message);
      });
      
  }

  // Popup functionality
  $("#MyDscroll").hide();

  function openForm() {
    // Use jQuery to toggle the visibility of the form
    $("#MyDscroll").show();
  }

  // Call openForm after 5000 milliseconds (5 seconds)
  var timerID = setTimeout(openForm, 5000);

  // Event handler for form submission
  $("#signupbabe").on("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get all input from the form
    var fullname = $("#fname").val();
    var email = $("#iemail").val();
    var password = $("#mpassword").val();

    // Call the register function
    register(fullname, email, password);

    // Hide the form
    $("#MyDscroll").hide();

    // Retrieve the value of the input field with id "fname"
    var firstName = $("#fname").val();

    // Replace the content of the formoutput element with the welcome message
    $("#formoutput").html("Welcome: " + firstName);

    // Clear the timeout to cancel the timer
    clearTimeout(timerID);
  });

  // Function for redirection using location.replace
  function myReplace() {
    var elOutput = document.getElementById("butt1");
    location.replace(elOutput.href);
  }

  // Assign the function myReplace to the onclick property of the element with id "topoff1"
  document.getElementById("topoff1").onclick = function () {
    myReplace();
  };

  // Function for redirection to a specific URL
  function redirectw3() {
    window.location.href = "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_redirect_webpage";
  }

  // Assign the function redirectw3 to the onclick property of the element with id "butt1"
  document.getElementById("butt1").onclick = function () {
    redirectw3();
  };
});
