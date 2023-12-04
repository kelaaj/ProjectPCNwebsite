<!DOCTYPE html>
<html lang="en">

<head>
  <title> Gift plus Sun </title>
  <meta charset="utf-8">
  <meta name="viewport" content="width = device-width">
  <style>
    * {
      box-sizing: border-box;
    }

    body {
      background-image: url('webbigpicture.jpg');
      background-size: cover;
      margin: 0;
      scroll-behavior: smooth;
      /* Enable smooth scrolling */
    }

    /* Style the header */
    .header {
      background-color: #f1f1f1;
      padding: 20px;
      text-align: center;
      position: sticky;
      top: 0;
    }

    /* Style the top navigation bar */
    .topnav {
      overflow: hidden;
      background-color: #333;
      text-align: center;
    }

    /* Style the topnav links */
    .topnav a {
      float: left;
      display: block;
      color: #f2f2f2;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;

    }

    /* Change color on hover */
    .topnav a:hover {
      background-color: #ddd;
      color: black;
    }

    /*pop up bar */
    .popup {
      width: auto;
      height: auto;
      padding: auto;
      border: 3px solid red;
      box-sizing: border-box;
      float: center;
      text-align: center;
      background: fixed;
    }

    /* Create three unequal columns that floats next to each other */
    .column {
      float: left;
      padding: 10px;
    }

    /* Left and right column */
    .column.side {
      width: 25%;
    }

    /* Middle column */
    .column.middle {
      width: 50%;
    }

    /* Clear floats after the columns */
    .row::after {
      content: "";
      display: table;
      clear: both;
    }

    /* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
    @media screen and (max-width: 600px) {

      .column.side,
      .column.middle {
        width: 100%;
      }
    }

    /* Style the footer */
    .footer {
      background-color: #333;
      padding: 10px;
      text-align: center;
      width: 100%;
      height: auto;
      left: 0;
      bottom: 0;
      position: fixed;
      overflow: hidden;
      text-align: center;
    }

    .footer  a {
      float: left;
      display: block;
      color: #f2f2f2;
      text-align: center;
      padding: 16px 16px;
      text-decoration: none;

    }

    .card {
      background-color: white;
      padding: 20px;
      margin-top: 20px;
    }

    .card img {
      max-width: 100%;
      height: auto;
    }

    .Box {
      width: 100px;
      height: 100px;
      float: center
    }

    .grid-container {
      display: grid;
      justify-content: center;
      justify-content: space-evenly;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      /*Make the grid smaller than the container*/
      padding: 10px;


    }

    .grid-container>div {
      background-color: rgba(255, 255, 255, 0.8);
      text-align: center;
      padding: 20px 0;
      font-size: 30px;
    }


    /* Add styles to the form container */
    .form-container {
      max-width: 600px;
      padding: 10px;
      background-color: white;
      position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    }

    /* Full-width input fields */
    .form-container input[type=text],
    .form-container input[type=password],
    .form-container input[type=email] {
      width: 100%;
      padding: 15px;
      margin: 5px 0 22px 0;
      border: none;
      background: #f1f1f1;
    }
    
  </style>
</head>

<body>
  <!-- Your body content goes here -->

  <div class="header">
    <h1>Gift And Sun's Kitchen</h1>
  </div>

  <div class="topnav">
      <a id="topoff1" href="#butt1" onclick="myReplace()">Recipies </a>
      <a href="#butt2">Products</a>
      <a href="#butt3">Gift & Sun</a>
      <a href="#butt4">Food</a>
      <a href="#butt5">Pastries</a>
  </div>

  <!--start your form here-->
 <!-- Remove the onload attribute from the following div -->
<div id="MyDscroll">
  <!-- <div class="popup">       -->
  <form id="signupbabe" method="get" class="form-container">
    <h1>SUBSCRIBE TO SUN & GIFT</h1>
    <input hidden type="text" id="fingerprint" name="fingerprint" value="">
    <label for="fname">Name:</label>
    <input type="text" id="fname" name="name" placeholder="Emily"><br>
    <label for="iemail">Email:</label>
    <input type="email" id="iemail" name="email" placeholder="jummy@gmail.com"> <br>
    <label for="mpassword">Password:</label>
    <input type="password" id="mpassword" name="password" placeholder="Emilyjut@2023"> <br>
    <input type="submit" name="SignUp"> <br>
    <p id ="iDO"> Already have an account? <a href="#" id = "ireally">Login</a></p>
  </form>
</div>


  <p id="formoutput"></p>


  <div class="footer">
      <a id="butt1" href="#Bro" onclick="redirectw3()">Recipie</a> 
      <a id="butt2" href="#Food"> food </a>
      <a id="butt3" href="#Bro">entree </a>
      <a id="butt4" href="#Pastries"> pastries</a> <br>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/2.1.0/fingerprint2.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
  <script src="control.js"></script>
</body>

</html>

