//Javascript

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
    // Validate email format
    if (!validateEmail(email)) {
      alert("Invalid email address");
      return;
    }

    auth.createUserWithEmailAndPassword(email, password)
      .then(function () {
        var user = auth.currentUser;

        // Add user data to Firebase database
        var database_ref = database.ref();

        // Add this user to Firebase database
        var user_data = {
          email: email,
          fullname: fullname,
          last_login: Date.now()
        };
        database_ref.child('users/' + user.uid).set(user_data);

        // Retrieve the value of the input field with id "fname"
        var firstName = $("#fname").val();

        // Replace the content of the formoutput element with the welcome message
        $("#formoutput").html("Welcome: " + firstName);

        // Clear the timeout to cancel the timer
        clearTimeout(timerID);

        // Hide the form only if user creation is successful
        $("#MyDscroll").hide();
      })
      .catch(function (error) {
        alert("Error creating user: " + error.message);
      });
  }

  // Set up login function
  function login(email, password) {
    auth.signInWithEmailAndPassword(email, password)
      .then(function () {
        var user = auth.currentUser;

        // Add user data to Firebase database
        var database_ref = database.ref();

        // Add this user to Firebase database
        var user_data = {
          last_login: Date.now()
        };
        database_ref.child('users/' + user.uid).update(user_data);

        $("#Mylogin").hide();

        // Welcome message
        $("#formoutput").html("Welcome Back " );
      })
      .catch(function (error) {
        alert(error.message);
      });
  }

  // Function to validate email format
  function validateEmail(email) {
    var expression = /^[^@]+@\w+(\.\w+)+\w$/;
    return expression.test(email);
  }

  // Popup functionality
  $("#Mylogin").hide();
  $("#MyDscroll").hide();

  function openForm() {
    $("#MyDscroll").show();
  }

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

    // Retrieve the value of the input field with id "fname"
    var firstName = $("#fname").val();

    // Replace the content of the formoutput element with the welcome message
    $("#formoutput").html("Welcome: " + firstName);

    // Clear the timeout to cancel the timer
    clearTimeout(timerID);
  });

     // Function to show login form
     function showLoginForm() {
      $("#Mylogin").show();
      $("#MyDscroll").hide();
    }



  // Function for redirection to a specific URL
  function redirectw3() {
    window.location.href ="https://ssun-studio.github.io/drink.html";
  }

  // Assign the function redirectw3 to the onclick property of the element with id "butt1"
  document.getElementById("topoff1").onclick = function () {
    redirectw3();
  };

  // Event handler for login form submission
  $("#loginbabe").on("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get input from the login form
    var email = $("#jemail").val();
    var password = $("#kpassword").val();

    // Call the login function
    login(email, password);
  });

    // Event handler to show login form when clicking on "Mylogin"
    $("#ireally").on("click", function () {
      showLoginForm();
    });
  
 
});
