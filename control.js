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
        alert("Error creating user: Your account already exists");
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
        $("#formoutput").html("Welcome: " + user.displayName);
      })
      .catch(function (error) {
        alert(error.message);
      });
  }

  // Popup functionality
  $("#Mylogin").hide();
  $("#MyDscroll").hide();

  function openForm() {
    $("#MyDscroll").show();
  }

  var timerID = setTimeout(openForm, 5000);

  $("#signupbabe").on("submit", function (event) {
    event.preventDefault();
    var fullname = $("#fname").val();
    var email = $("#iemail").val();
    var password = $("#mpassword").val();

    register(fullname, email, password);
  });

  function myReplace() {
    var elOutput = document.getElementById("butt1");
    location.replace(elOutput.href);
  }

  document.getElementById("topoff1").onclick = function () {
    myReplace();
  };

  function redirectw3() {
    window.location.href = "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_redirect_webpage";
  }

  document.getElementById("butt1").onclick = function () {
    redirectw3();
  };

  function showLoginForm() {
    $("#Mylogin").show();
    $("#MyDscroll").hide();
  }

  document.getElementById("ireally").onclick = function () {
    showLoginForm();
  };

  $("#loginbabe").on("submit", function (event) {
    event.preventDefault();

    var email = $("#iemail").val();
    var password = $("#mpassword").val();

    login(email, password);
  });
});
